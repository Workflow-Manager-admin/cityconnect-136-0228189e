import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signUp } from '../auth/signup';

/**
 * SignupPage
 * Allows user to register as either Citizen or Authority.
 * Role can be pre-selected via query param "?role=authority" or "?role=citizen"
 * Calls signUp API, and on success, redirects to login.
 */
function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('citizen');
  const navigate = useNavigate();
  const location = useLocation();

  // Read ?role=citizen|authority from location.search and preselect
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleParam = params.get('role');
    if (roleParam && (roleParam === 'citizen' || roleParam === 'authority')) {
      setRole(roleParam);
    }
  }, [location.search]);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password, role);
      alert('Signup successful! Please check your email if confirmation is required, then log in.');
      // Optionally, pass selected role to login for easier UX
      navigate(`/login?role=${role}`);
    } catch (err) {
      console.error('Signup error:', err?.message || err);
      alert('Signup failed: ' + (err?.message || err));
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 400, margin: "2rem auto", background: "#f8fbfe", borderRadius: 12 }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
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
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required /><br /><br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="citizen">Citizen</option>
          <option value="authority">Authority</option>
        </select><br /><br />
        <button className="btn" type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignupPage;
