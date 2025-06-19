import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
/**
 * Home - landing page for CityConnect
 */
const Home = () => (
  <div className="container" style={{ marginTop: "4rem", textAlign: "center" }}>
    <h1 className="title">Welcome to CityConnect</h1>
    <p className="description">Report civic issues. Track progress. Help improve city life.</p>
    <div style={{ margin: "2rem 0" }}>
      <Link to="/login" className="btn" style={{ marginRight: 10 }}>Login</Link>
      <Link to="/signup" className="btn">Sign Up</Link>
    </div>
  </div>
);

export default Home;
