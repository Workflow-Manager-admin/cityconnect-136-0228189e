import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignupCitizen from "./pages/SignupCitizen";
import LoginCitizen from "./pages/LoginCitizen";
import SignupAuthority from "./pages/SignupAuthority";
import LoginAuthority from "./pages/LoginAuthority";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup-citizen" element={<SignupCitizen />} />
        <Route path="/login-citizen" element={<LoginCitizen />} />
        <Route path="/signup-authority" element={<SignupAuthority />} />
        <Route path="/login-authority" element={<LoginAuthority />} />
      </Routes>
    </Router>
  );
}

export default App;
