import React, { useContext } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { Context } from './context/AuthContext';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';

// ----------------------------------------------------------------------

export default function Router() {
  const { authenticated } = useContext(Context);
  const routes = useRoutes([
    {
      path: '/login',
      element: <LoginPage />,
      index: true,
    },
    {
      path: '/',
      element: authenticated ? <DashboardLayout /> : <Navigate to="/login" />,
      children: [
        { path: 'dashboard', element: <Navigate to="/dashboard/app" /> },
        { path: 'dashboard/app', element: <DashboardAppPage /> },
        { path: 'dashboard/user', element: <UserPage /> },
        { path: 'dashboard/blog', element: <BlogPage /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
