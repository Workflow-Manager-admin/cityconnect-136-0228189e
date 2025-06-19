import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Welcome to CivicFlow</h1>
      <p>Please choose your portal:</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "50px", marginTop: "40px" }}>
        {/* Citizen Section */}
        <div style={{
          border: "1px solid #ccc",
          padding: "30px",
          borderRadius: "12px",
          width: "250px",
          backgroundColor: "#f9f9f9"
        }}>
          <h2>Citizen</h2>
          <button onClick={() => navigate("/signup-citizen")}>Sign Up</button><br /><br />
          <button onClick={() => navigate("/login-citizen")}>Log In</button>
        </div>

        {/* Authority Section */}
        <div style={{
          border: "1px solid #ccc",
          padding: "30px",
          borderRadius: "12px",
          width: "250px",
          backgroundColor: "#f1f1f1"
        }}>
          <h2>Authority</h2>
          <button onClick={() => navigate("/signup-authority")}>Sign Up</button><br /><br />
          <button onClick={() => navigate("/login-authority")}>Log In</button>
        </div>
      </div>
    </div>
  );
}
