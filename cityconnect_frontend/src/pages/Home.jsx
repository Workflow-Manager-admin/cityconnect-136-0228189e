import React from "react";
import { useNavigate } from "react-router-dom";

/*
  PUBLIC_INTERFACE
  Home - Landing page with clear panel/card separation for Citizen and Authority flows.
  Each panel has Sign Up and Log In buttons, routing to their respective role-specific pages.
*/
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container" style={{
      marginTop: "3rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <h1 className="title" style={{ marginBottom: 6 }}>Welcome to CityConnect</h1>
      <p className="description" style={{ marginBottom: "2.5rem" }}>Digital platform for city improvement. Choose your area to get started.</p>
      <div
        style={{
          display: "flex",
          gap: "3rem",
          width: "100%",
          maxWidth: 900,
          justifyContent: "center",
          marginTop: "1rem"
        }}
      >
        {/* Citizen Card */}
        <div
          style={{
            background: "linear-gradient(135deg, #4A90E2 25%, #d8ecfc 100%)",
            color: "#15396b",
            borderRadius: 14,
            boxShadow: "0 4px 24px 0 rgba(90, 170, 255, 0.09)",
            minWidth: 270,
            flex: 1,
            padding: "2.5rem 2rem",
            textAlign: "center",
            border: "2.5px solid #97bcf1"
          }}
        >
          <h2 className="subtitle" style={{
            fontWeight: 700,
            fontSize: "1.7rem"
          }}>
            Citizen
          </h2>
          <div style={{
            fontSize: ".98rem",
            marginBottom: 20,
            color: "#30589A"
          }}>
            For residents: Report issues and view your report status.
          </div>
          <button
            className="btn btn-large"
            style={{ width: "90%", margin: "10px 0" }}
            onClick={() => navigate("/signup-citizen")}
          >
            Sign Up
          </button>
          <br />
          <button
            className="btn btn-large"
            style={{ width: "90%" }}
            onClick={() => navigate("/login-citizen")}
          >
            Log In
          </button>
        </div>

        {/* Authority Card */}
        <div
          style={{
            background: "linear-gradient(135deg, #f9d386 0%, #fff4d8 100%)",
            color: "#714a17",
            borderRadius: 14,
            boxShadow: "0 4px 24px 0 rgba(255, 204, 90, 0.10)",
            minWidth: 270,
            flex: 1,
            padding: "2.5rem 2rem",
            textAlign: "center",
            border: "2.5px solid #f7d399"
          }}
        >
          <h2 className="subtitle" style={{
            fontWeight: 700,
            fontSize: "1.7rem"
          }}>
            Authority
          </h2>
          <div style={{
            fontSize: ".98rem",
            marginBottom: 20,
            color: "#a77022"
          }}>
            For city officials: Manage, review, and resolve citizen reports.
          </div>
          <button
            className="btn btn-large"
            style={{ width: "90%", margin: "10px 0" }}
            onClick={() => navigate("/signup-authority")}
          >
            Sign Up
          </button>
          <br />
          <button
            className="btn btn-large"
            style={{ width: "90%" }}
            onClick={() => navigate("/login-authority")}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
