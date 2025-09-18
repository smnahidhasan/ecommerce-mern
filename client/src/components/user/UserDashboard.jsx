import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import UserSidebar from './UserSidebar';

const UserDashboard = () => {
  return (
    <Box
      display={{ xs: 'block', md: 'flex' }}
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      <Box sx={{ width: '100%', mb: { xs: 2, md: 0 } }}>
        <UserSidebar />
      </Box>
      <Container>
        <Typography variant="h4" gutterBottom>
          User Dashboard
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default UserDashboard;
