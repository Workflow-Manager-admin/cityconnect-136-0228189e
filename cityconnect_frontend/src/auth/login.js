 // PUBLIC_INTERFACE
/**
 * login handles user authentication.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<object>} Supabase response (mock)
 */
export async function login(email, password) {
  // Replace with actual Supabase call
  // e.g., const { user, error } = await supabase.auth.signInWithPassword({ email, password })
  return { user: { email }, error: null };
}
