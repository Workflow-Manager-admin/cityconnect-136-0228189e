import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ReportForm from "./components/ReportForm";
import SignupCitizenPage from "./pages/SignupCitizenPage";
import LoginCitizenPage from "./pages/LoginCitizenPage";
import SignupAuthorityPage from "./pages/SignupAuthorityPage";
import LoginAuthorityPage from "./pages/LoginAuthorityPage";
import "./App.css";

/*
  PUBLIC_INTERFACE
  Main App for CityConnect: Includes header, grid layout, router, and navigation.
*/
function App() {
  // Simple mock authentication state
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="app" style={{ minHeight: "100vh" }}>
        <nav className="navbar">
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="logo">
              <span className="logo-symbol">*</span> CityConnect
            </div>
            <div>
              <Link to="/" className="btn" style={{ marginRight: 8 }}>Home</Link>
              {user ?
                <>
                  <Link to="/dashboard" className="btn" style={{ marginRight: 8 }}>Dashboard</Link>
                  <button className="btn" onClick={() => setUser(null)}>Logout</button>
                </> :
                <>
                  <Link to="/login" className="btn" style={{ marginRight: 8 }}>Login</Link>
                  <Link to="/signup" className="btn">Signup</Link>
                </>
              }
            </div>
          </div>
        </nav>
        <main style={{ display: "grid", gridTemplateColumns: "240px 1fr", marginTop: 80, minHeight: 500 }}>
          <aside style={{
            borderRight: "1px solid var(--border-color)",
            background: "#f9fafb",
            padding: "2rem 1rem 1rem 2rem",
            color: "#444",
            minHeight: "100%"
          }}>
            <h3 style={{ color: "var(--base-dark)" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/report">Submit Report</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </aside>
          <section style={{ padding: "2rem 1.5rem" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage onLogin={setUser} />} />
              <Route path="/signup" element={<SignupPage onRegister={setUser} />} />
              <Route path="/signup-citizen" element={<SignupCitizenPage />} />
              <Route path="/login-citizen" element={<LoginCitizenPage />} />
              <Route path="/signup-authority" element={<SignupAuthorityPage />} />
              <Route path="/login-authority" element={<LoginAuthorityPage />} />
              <Route path="/report" element={
                <ProtectedRoute isAuthenticated={!!user}>
                  <ReportForm />
                </ProtectedRoute>
              } />
              <Route path="/dashboard" element={
                <ProtectedRoute isAuthenticated={!!user}>
                  <DashboardPage />
                </ProtectedRoute>
              } />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
