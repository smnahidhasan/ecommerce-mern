// ProtectedRoute.js
import React from 'react';
import { Outlet } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Outlet /> : <SignIn />;
};

export default ProtectedRoute;
