import React from "react";
import { Navigate } from "react-router-dom";

/* 
  PUBLIC_INTERFACE
  ProtectedRoute - restricts access to authenticated users.
  Props:
    - isAuthenticated: boolean, 
    - children: JSX to render if authenticated.
*/
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
