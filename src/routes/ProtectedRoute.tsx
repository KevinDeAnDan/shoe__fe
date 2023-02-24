/* eslint-disable react/function-component-definition */
import React from 'react';
import { Route, Navigate , Outlet} from 'react-router-dom';



const ProtectedRoute = (props: any) => {
  // Implement logic to check if user is authenticated
  const isAuthenticated = localStorage.getItem('token');

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return <Outlet/>;
};

export default ProtectedRoute;