import React from 'react';
import PropTypes from 'prop-types';
import { Box, Pagination } from '@mui/material';

const PaginationComp = ({ pageNumber, totalPages, setPageNumber }) => {
  // Function to handle page change event
  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Pagination
        count={totalPages}
        page={pageNumber}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </Box>
  );
};

PaginationComp.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setPageNumber: PropTypes.func.isRequired,
};

export default PaginationComp;
