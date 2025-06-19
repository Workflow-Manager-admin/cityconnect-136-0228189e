import React, { useState } from "react";
import { signUp } from "../auth/signup";

// PUBLIC_INTERFACE
/**
 * SignupPage - User registration form using Supabase signUp.
 */
const SignupPage = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, error } = await signUp(email, password);
    if (error) setError(error.message || "Signup failed");
    else {
      setError(null);
      if (onRegister) onRegister(user);
    }
  };

  return (
    <div className="container" style={{ marginTop: "4rem", maxWidth: 400 }}>
      <h2>Sign Up</h2>
      <form style={{ display: "grid", gap: 12 }} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="username"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          autoComplete="new-password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="btn" type="submit">Create Account</button>
        {error && <div style={{ color: "#E87A41" }}>{error}</div>}
      </form>
    </div>
  );
};

export default SignupPage;
