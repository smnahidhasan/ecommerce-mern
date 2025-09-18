import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

import CartIcon from '../components/cart/CartIcon';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { isLoggedIn, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Sign up', to: '/signup', hide: isLoggedIn },
    { label: 'Sign in', to: '/signin', hide: isLoggedIn },
    isAdmin && {
      label: 'Admin Dashboard',
      to: '/dashboard/admin',
      show: isLoggedIn,
    },
    isLoggedIn &&
      !isAdmin && {
        label: 'User Dashboard',
        to: '/dashboard/user',
        show: isLoggedIn,
      },
    { label: 'Cart', to: '/cart', icon: <CartIcon /> },
    { label: 'About', to: '/about' },
    { label: 'faq', to: '/faq' },
    isLoggedIn && { label: 'Logout', action: logout, show: true },
  ].filter(Boolean);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Anisul Express
        </Typography>

        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {navItems.map(
            (item) =>
              !item.hide &&
              (!item.show || item.show === isLoggedIn) && (
                <Button
                  key={item.label}
                  color="inherit"
                  component={item.to ? Link : 'button'}
                  to={item.to}
                  onClick={item.action}
                >
                  {item.icon || item.label}
                </Button>
              )
          )}
        </Box>

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <List sx={{ width: 250 }}>
            {navItems.map(
              (item) =>
                !item.hide &&
                (!item.show || item.show === isLoggedIn) && (
                  <ListItem
                    key={item.label}
                    disablePadding
                    onClick={() => {
                      toggleDrawer(false);
                      if (item.action) item.action();
                    }}
                  >
                    <ListItemButton
                      component={item.to ? Link : 'button'}
                      to={item.to}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                )
            )}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
