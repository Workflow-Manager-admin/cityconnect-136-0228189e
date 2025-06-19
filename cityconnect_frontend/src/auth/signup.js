import { supabase } from '../supabase/supabaseClient';

/**
 * PUBLIC_INTERFACE
 * signUp - Registers a user with the given email and password in Supabase Auth,
 * and saves their role ("citizen" or "authority") in the user_profiles table.
 * Throws an error if signup or role-insertion fails.
 * @param {string} email
 * @param {string} password
 * @param {"citizen"|"authority"} role
 */
export const signUp = async (email, password, role) => {
  // 1. Sign up to Supabase Auth
  const { data: signUpData, error: authError } = await supabase.auth.signUp({ email, password });
  if (authError) throw authError;

  // 2. Insert user role into user_profiles
  // Supabase may return user in 'signUpData.user' (after verification), or only in session/user_metadata
  const user = signUpData?.user;
  if (user && user.id) {
    // Insert record in user_profiles: id matches Auth user id, plus role
    const { error: insertProfileError } = await supabase
      .from('user_profiles')
      .insert([{ id: user.id, role }]);
    if (insertProfileError) throw insertProfileError;
  } else {
    // Supabase may require email confirmation, so user may not exist yet
    // Simple guidance: direct user to confirm email and login to complete registration
    // (Do not throw, just proceed)
  }
};

/*
  Note:
  - On successful signup, the user should verify their email (if required by project settings).
  - After login, use getUserRole with user.id to fetch role.
  - user_profiles table should use Auth user id as PK and store role as a column.
*/