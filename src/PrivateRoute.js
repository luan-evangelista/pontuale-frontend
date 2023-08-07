import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard/DashboardLayout';

const PrivateRoute = ({ authenticated }) => {
  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return <DashboardLayout authenticated/>;
};

export default PrivateRoute;