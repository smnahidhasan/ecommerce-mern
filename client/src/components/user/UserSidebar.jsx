import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

// UserSidebar Component
const UserSidebar = () => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: 250 },
        borderRight: { md: '1px solid #ddd' },
        height: { md: '100vh' },
        padding: 2,
        borderBottom: { xs: '1px solid #ddd', md: 'none' },
      }}
    >
      <List>
        <ListItemButton component={Link} to="/dashboard/user">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="profile">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton component={Link} to="orders">
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default UserSidebar;
