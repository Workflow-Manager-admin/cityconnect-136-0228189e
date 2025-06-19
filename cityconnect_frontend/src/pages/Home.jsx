import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
/**
 * Home - landing page for CityConnect
 * - Visually separates flows for Citizens and Authorities.
 * - Each section links to respective signup/login screens with explicit role indicator in the route/query.
 */
const Home = () => (
  <div className="container" style={{ marginTop: "4rem", textAlign: "center" }}>
    <h1 className="title">Welcome to CityConnect</h1>
    <p className="description">Report civic issues. Track progress. Help improve city life.</p>
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "3rem",
      marginTop: "2.5rem"
    }}>
      <div style={{
        background: "#f3fbff", color: "#253850", padding: "2.5rem 2rem", borderRadius: 12,
        minWidth: 220, boxShadow: "1px 2px 8px #ececec"
      }}>
        <h2>Citizen</h2>
        <div style={{ marginBottom: 18 }}>
          <span style={{
            fontSize: "0.95rem", color: "#6ca1d5"
          }}>
            Want to report an issue or track complaints?
          </span>
        </div>
        <Link to="/signup?role=citizen" className="btn" style={{ marginBottom: 16, width: "100%" }}>Sign Up</Link>
        <br />
        <Link to="/login?role=citizen" className="btn" style={{ width: "100%" }}>Log In</Link>
      </div>
      <div style={{
        background: "#fff9f3", color: "#504125", padding: "2.5rem 2rem", borderRadius: 12,
        minWidth: 220, boxShadow: "1px 2px 8px #ececec"
      }}>
        <h2>Authority</h2>
        <div style={{ marginBottom: 18 }}>
          <span style={{
            fontSize: "0.95rem", color: "#e1a66c"
          }}>
            Access dashboard and manage city reports.
          </span>
        </div>
        <Link to="/signup?role=authority" className="btn" style={{ marginBottom: 16, width: "100%" }}>Sign Up</Link>
        <br />
        <Link to="/login?role=authority" className="btn" style={{ width: "100%" }}>Log In</Link>
      </div>
    </div>
  </div>
);

export default Home;
