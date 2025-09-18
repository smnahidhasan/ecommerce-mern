// AdminRoute.js
import React from 'react';
import { Outlet } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import { useAuth } from '../hooks/useAuth';

const AdminRoute = () => {
  const { isLoggedIn, isAdmin } = useAuth();

  return isLoggedIn && isAdmin ? <Outlet /> : <SignIn />;
};

export default AdminRoute;
