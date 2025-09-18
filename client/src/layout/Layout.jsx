import React from 'react';

import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Full viewport height
      }}
    >
      <Navbar />
      <Box component="main" sx={{ flex: '1 0 auto' }}>
        <Main />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
