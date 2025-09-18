import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './AuthContext';

import useCart from '../hooks/useCart';
import { CartContext } from './CartContext';

export const AuthProvider = ({ children }) => {
  const { clearCart } = useContext(CartContext); // Get clearCart from CartContext
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const isAdmin = user?.isAdmin || false;

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', authToken);
    localStorage.setItem('loginStatus', 'true');
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
    clearCart(); // Clear the cart from CartContext
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('loginStatus');
    localStorage.removeItem('cart'); // Clear cart from localStorage

  };

  return (
    <AuthContext.Provider
      value={{ user, token, isLoggedIn, isAdmin, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
