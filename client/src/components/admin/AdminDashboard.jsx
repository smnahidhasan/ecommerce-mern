import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <Box
      display={{ xs: 'block', md: 'flex' }}
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      <Box sx={{ width: '100%', mb: { xs: 2, md: 0 } }}>
        <AdminSidebar />
      </Box>
      <Container>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
