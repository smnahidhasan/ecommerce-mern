import React from 'react';
import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

import Products from '../components/products/Products';
import SearchInput from '../components/SearchInput';
import PaginationComp from '../components/PaginationComp';
import Sort from '../components/Sort';
import useProduct from '../hooks/useProduct';
import PageTitle from '../components/PageTitle';
import { sortOptionsForProducts } from '../constant/sortingOptions';
import ChatBot from '../components/ChatBot';

const Home = () => {
  const {
    pageNumber,
    setPageNumber,
    totalPages,
    setSearchValue,
    sortOrder,
    setSortOrder,
  } = useProduct();

  return (
    <Container>
      <PageTitle title="home" />
      {/* <Typography variant="h4" gutterBottom align="center">
        Products
      </Typography> */}

      {/* Search and Sort Row */}
      <Box sx={{ mb: 4 }}>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <SearchInput
              setSearchValue={setSearchValue}
              label={'Search products...'}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Sort
              options={sortOptionsForProducts}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Products List */}
      <Products />

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <PaginationComp
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPages={totalPages}
        />
      </Box>

      <ChatBot />
    </Container>
  );
};

export default Home;
