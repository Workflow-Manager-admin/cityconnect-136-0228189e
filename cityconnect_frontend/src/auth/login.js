import { supabase } from '../supabase/supabaseClient';

/**
 * PUBLIC_INTERFACE
 * login - Attempts login via Supabase Auth. Throws if credentials incorrect.
 * Returns the user session data.
 * @param {string} email 
 * @param {string} password
 * @returns {object} { user, session }
 */
export const login = async (email, password) => {
  // Use supabase.auth.signInWithPassword for login
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
};

/**
 * PUBLIC_INTERFACE
 * getUserRole - Fetches the user's role ('citizen' or 'authority') from user_profiles table.
 * Throws if user not found or error occurs.
 * @param {string} userId
 * @returns {Promise<string>} user role
 */
export const getUserRole = async (userId) => {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('role')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data?.role;
};

/*
  Note:
  - Use login() to authenticate and then getUserRole() with user.id for role-based behavior.
  - Route user after login accordingly:
    - 'citizen': to ReportForm (issue page)
    - 'authority': to DashboardPage (dashboard)
*/
