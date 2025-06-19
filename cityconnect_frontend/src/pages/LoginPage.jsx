// File: src/pages/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { login, getUserRole } from '../auth/login';

/**
 * LoginPage
 * Shows login form, uses login API. After successful login, fetches role and redirects:
 * - If 'citizen', redirect to /report (issue page)
 * - If 'authority', redirect to /dashboard (dashboard page)
 * Accepts query param ?role=authority|citizen for UX preselection (optional).
 */
function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roleParam, setRoleParam] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Grab ?role= from query, if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const r = params.get('role');
    if (r && (r === 'citizen' || r === 'authority')) setRoleParam(r);
  }, [location.search]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { user } = await login(email, password);
      if (!user) throw new Error("No user found in login response.");
      // Fetch role from user_profiles
      const role = await getUserRole(user.id);
      if (!role) throw new Error("Could not fetch user role. Please contact support.");

      // Store session in context (optional, handled in parent)
      if (onLogin) onLogin(user);

      // Role-based navigation
      if (role === 'authority') {
        navigate('/dashboard');
      } else if (role === 'citizen') {
        navigate('/report');
      } else {
        setError(`Unknown role: ${role}`);
      }
    } catch (err) {
      setError(err?.message || "Login failed.");
      console.error('Login error:', err);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 400, margin: "2rem auto", background: "#fefaf8", borderRadius: 12 }}>
      <h2>Login {roleParam && `as ${roleParam.charAt(0).toUpperCase() + roleParam.slice(1)}`}</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required /><br /><br />
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required /><br /><br />
        <button className="btn" type="submit">Login</button>
      </form>
      {error && <p style={{ color: "#e85b4f", marginTop: 12 }}>{error}</p>}
    </div>
  );
}

export default LoginPage;
