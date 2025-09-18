import React from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import Product from './Product';
import useProduct from '../../hooks/useProduct';
import Loader from '../Loader';

const Products = () => {
  const { products, isLoading, error } = useProduct(); // Use the custom hook

  if (isLoading) {
    return <Loader message="Loading products, please wait..." />;
  }

  if (error) {
    return (
      <Loader message="Failed to load products. Please try again." size={70} />
    );
  }
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.productId}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
