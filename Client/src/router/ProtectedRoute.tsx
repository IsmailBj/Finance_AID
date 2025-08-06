import { JSX } from "react";
import { Navigate } from "react-router-dom";
import isTokenExpired from "../helpers/isTokenExpired";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");

  if (!token || isTokenExpired(token)) {
    localStorage.removeItem("token");
    return <Navigate to="/Landing" replace />;
  }

  return children;
};

export default ProtectedRoute;
