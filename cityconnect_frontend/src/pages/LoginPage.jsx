import React, { useState } from "react";
import { login } from "../auth/login";

/* 
  PUBLIC_INTERFACE
  LoginPage - form to handle login.
*/
const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, error } = await login(email, password);
    if (error) setError(error.message || "Login failed");
    else {
      setError(null);
      if (onLogin) onLogin(user);
    }
  };

  return (
    <div className="container" style={{ marginTop: "4rem", maxWidth: 400 }}>
      <h2>Login</h2>
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
          autoComplete="current-password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="btn" type="submit">Login</button>
        {error && <div style={{ color: "#E87A41" }}>{error}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
