// src/components/Loader.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';

const Loader = ({ message = 'Loading...', size = 50 }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh"
    >
      <ClipLoader
        color="#1976d2"
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <Typography variant="body1" color="textSecondary" mt={2}>
        {message}
      </Typography>
    </Box>
  );
};

Loader.propTypes = {
  message: PropTypes.string,
  size: PropTypes.number,
};

export default Loader;
