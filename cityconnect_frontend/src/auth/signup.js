 // PUBLIC_INTERFACE
/**
 * signUp handles user registration.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<object>} Supabase response (mock)
 */
export async function signUp(email, password) {
  // Replace with actual Supabase call
  // e.g., const { user, error } = await supabase.auth.signUp({ email, password })
  return { user: { email }, error: null };
}
