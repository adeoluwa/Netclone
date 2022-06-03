import React from 'react';

import { Navigate } from 'react-router-dom';

import { UserAuth } from '../context/AuthContext';

/**
 * If the user is not logged in, redirect to the login page. Otherwise, render the children
 * @returns The children of the ProtectedRoute component.
 */
const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
