import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

import Loader from '../components/Loader';
import { getProductById } from '../services/productService';
import useCart from '../hooks/useCart';

const ProductDetails = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart(); // Get cart data and addToCart function

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async (id) => {
    try {
      const response = await getProductById(id);
      setProduct(response.data);
    } catch (error) {
      setError('Failed to fetch product details.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  if (isLoading) {
    return <Loader message="Loading products, please wait..." />;
  }

  if (error) {
    return (
      <Loader message="Failed to load products. Please try again." size={70} />
    );
  }

  // Check if the product is already in the cart
  const isInCart = cart.some((item) => item.productId === product.productId);

  // Destructure product properties
  const {
    name,
    description,
    image,
    price,
    quantity,
    shipping,
    sold,
    createdAt,
  } = product || {};

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Card>
        {image && (
          <CardMedia
            component="img"
            height="400"
            image={image} // Assumes 'image' is a valid image URL
            alt={name}
          />
        )}
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {description}
          </Typography>

          <Divider style={{ margin: '20px 0' }} />

          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <Typography variant="h6">Price:</Typography>
              <Typography variant="body1">${price.toFixed(2)}</Typography>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Typography variant="h6">Quantity Available:</Typography>
              <Typography variant="body1">{quantity}</Typography>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Typography variant="h6">Shipping Cost:</Typography>
              <Typography variant="body1">${shipping.toFixed(2)}</Typography>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Typography variant="h6">Items Sold:</Typography>
              <Typography variant="body1">{sold}</Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography variant="h6">Created At:</Typography>
              <Typography variant="body1">
                {new Date(createdAt).toLocaleDateString()}{' '}
                {new Date(createdAt).toLocaleTimeString()}
              </Typography>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ marginTop: '16px' }} // Push the button to the bottom
            onClick={() => addToCart(product)}
            disabled={isInCart} // Disable if product is in cart
          >
            {isInCart ? 'Already in Cart' : 'Add To Cart'}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;
