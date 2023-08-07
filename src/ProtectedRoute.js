import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, isAuthenticated, fallbackPath, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to={fallbackPath} replace />}
    />
  );
};

export default ProtectedRoute;
