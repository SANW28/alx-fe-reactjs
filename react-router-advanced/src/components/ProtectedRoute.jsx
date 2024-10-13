import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulate authentication status (you can replace this logic with real authentication)
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true'; // Change this logic as needed
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child components
  return children;
};

export default ProtectedRoute;
