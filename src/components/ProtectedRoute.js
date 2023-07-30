import React from "react";
import useAuth from "./useAuth";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/logIn" replace={true} />;
};

export default ProtectedRoute;
