import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 4, mt: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a leading e-commerce platform, dedicated to providing
              quality products and excellent customer service. Our mission is to
              make online shopping easy and enjoyable for everyone.
            </Typography>
          </Grid>

          {/* Contact Section */}
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: support@yourcompany.com
            </Typography>
            <Typography variant="body2">Phone: +1 (123) 456-7890</Typography>
            <Typography variant="body2">
              Address: 1234 E-commerce St, Shopsville, CA
            </Typography>
          </Grid>

          {/* Social Media Links Section */}
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <Link
                href="https://facebook.com"
                color="inherit"
                underline="hover"
                target="_blank"
                rel="noopener"
                sx={{ pr: 2 }}
              >
                Facebook
              </Link>
              <Link
                href="https://twitter.com"
                color="inherit"
                underline="hover"
                target="_blank"
                rel="noopener"
                sx={{ pr: 2 }}
              >
                Twitter
              </Link>
              <Link
                href="https://instagram.com"
                color="inherit"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" color="textSecondary">
            {'© '}
            Your Company {new Date().getFullYear()} | All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
