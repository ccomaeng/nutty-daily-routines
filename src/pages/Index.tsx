
import React from "react";
import { Navigate } from "react-router-dom";

const Index = () => {
  // Redirect to Korean page by default
  return <Navigate to="/" replace />;
};

export default Index;
