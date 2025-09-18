import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const Product = ({ product }) => {
  const { cart, addToCart } = useCart();

  // Check if the product is already in the cart
  const isInCart = cart.some((item) => item.productId === product.productId);

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Product Image */}
      <CardMedia
        component="img"
        height="180"
        image={product.image || 'https://via.placeholder.com/150'}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />

      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
      >
        {/* Product Name */}
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          color="primary"
          fontWeight="bold"
        >
          {product.name}
        </Typography>

        {/* Product Description */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {product.description?.length > 60
            ? `${product.description.slice(0, 60)}...`
            : product.description}
        </Typography>

        {/* Product Price */}
        <Typography
          variant="subtitle1"
          color="text.primary"
          fontWeight="medium"
        >
          Price: ${product.price.toFixed(2)}
        </Typography>

        {/* Product Quantity */}
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
          Quantity: {product.quantity}
        </Typography>

        {/* Show Details Button */}
        <Button
          component={Link}
          to={`/products/${product.productId}`}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 'auto' }} // Push the button to the bottom
        >
          Show Details
        </Button>

        {/* Add To Cart Button */}
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ marginTop: '16px' }}
          onClick={() => addToCart(product)}
          disabled={isInCart} // Disable button if product is in cart
        >
          {isInCart ? 'Already in Cart' : 'Add To Cart'}
        </Button>
      </CardContent>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default Product;
