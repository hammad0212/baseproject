import { Navigate, useOutletContext } from 'react-router-dom';
import React from 'react';

const ProtectedRoute = ({ children }) => {
  const { user } = useOutletContext();
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
