import React from "react";
import { useNavigate } from "react-router-dom";

/*
  PUBLIC_INTERFACE
  Home - Presents two visually distinct cards: Citizen and Authority.
  Each card shows a header and two buttons (Sign Up, Log In) that route to the correct pages.
  Minimal styling ensures clear visual separation and consistency with the app.
*/
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container" style={{
      marginTop: "2.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "70vh"
    }}>
      <h1 className="title" style={{ marginBottom: 6 }}>Welcome to CityConnect</h1>
      <p className="description" style={{ marginBottom: "2.0rem" }}>
        Digital platform for city improvement. Choose your user type to get started.
      </p>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          width: "100%",
          maxWidth: 800,
          justifyContent: "center",
          marginTop: "1rem"
        }}
      >
        {/* Citizen Card */}
        <section
          style={{
            flex: 1,
            minWidth: 260,
            maxWidth: 350,
            background: "#eaf6fd",
            border: "1.5px solid #72b8ea",
            borderRadius: 12,
            boxShadow: "0 4px 16px 0 rgba(80,160,255, 0.06)",
            padding: "2rem 1.2rem",
            marginBottom: "1rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2 className="subtitle" style={{
            fontWeight: 700,
            fontSize: "1.4rem",
            color: "#3174b8"
          }}>
            Citizen
          </h2>
          <div style={{
            fontSize: ".98rem",
            margin: "10px 0 22px 0",
            color: "#3a6897"
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
          <button
            className="btn btn-large"
            style={{ width: "90%" }}
            onClick={() => navigate("/login-citizen")}
          >
            Log In
          </button>
        </section>

        {/* Authority Card */}
        <section
          style={{
            flex: 1,
            minWidth: 260,
            maxWidth: 350,
            background: "#f9efd0",
            border: "1.5px solid #e2bb74",
            borderRadius: 12,
            boxShadow: "0 4px 16px 0 rgba(255, 200, 90, 0.07)",
            padding: "2rem 1.2rem",
            marginBottom: "1rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2 className="subtitle" style={{
            fontWeight: 700,
            fontSize: "1.4rem",
            color: "#b48620"
          }}>
            Authority
          </h2>
          <div style={{
            fontSize: ".98rem",
            margin: "10px 0 22px 0",
            color: "#9d7722"
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
          <button
            className="btn btn-large"
            style={{ width: "90%" }}
            onClick={() => navigate("/login-authority")}
          >
            Log In
          </button>
        </section>
      </div>
      <p style={{
        marginTop: "2.5rem",
        color: "var(--text-secondary)",
        fontSize: "1rem"
      }}>
        <b>Note:</b> If you do not see the updated page, please reload the app in your browser or trigger a hot reload in your development environment.
      </p>
    </div>
  );
};

export default Home;
