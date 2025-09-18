import React from 'react';
import { Container, Typography, Box, Avatar, Paper } from '@mui/material';
import { List, ListItem, ListItemIcon } from '@mui/material';
import { styled } from '@mui/system';
import { CheckCircle } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';

import PageTitle from "../components/PageTitle"
const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <PageTitle title="About"/>
      <Typography variant="h3" gutterBottom align="center" color="primary">
        About Us
      </Typography>
      <Typography variant="h5" paragraph align="center" color="textSecondary">
        Welcome to our e-commerce platform, where we connect you with the best
        products for all your needs. Our mission is to provide quality products
        at affordable prices while delivering an exceptional shopping
        experience.
      </Typography>

      {/* Team Section */}
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Meet Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Avatar
              alt="Team Member"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              sx={{ width: 100, height: 100, margin: '0 auto' }}
            />
            <Typography variant="h6" mt={2}>
              John Doe
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Founder & CEO
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Avatar
              alt="Team Member"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              sx={{ width: 100, height: 100, margin: '0 auto' }}
            />
            <Typography variant="h6" mt={2}>
              Jane Smith
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Head of Marketing
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Avatar
              alt="Team Member"
              src="https://randomuser.me/api/portraits/men/2.jpg"
              sx={{ width: 100, height: 100, margin: '0 auto' }}
            />
            <Typography variant="h6" mt={2}>
              Robert Lee
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Chief Technology Officer
            </Typography>
          </Paper>
        </Grid>

        {/* Mission & Values Section */}
        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom color="primary">
            Our Mission & Values
          </Typography>

          <Typography variant="h6" paragraph color="textSecondary">
            At [Company Name], we are dedicated to providing the best shopping
            experience through our commitment to the following core values:
          </Typography>

          {/* Mission and Values List */}
          <Grid container spacing={4} justifyContent="center">
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Paper
                elevation={3}
                sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}
              >
                <Typography variant="h6" color="primary" gutterBottom>
                  Quality Products
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  We ensure that every product we sell meets the highest
                  standards of quality and craftsmanship.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Paper
                elevation={3}
                sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}
              >
                <Typography variant="h6" color="primary" gutterBottom>
                  Global Shipping
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  Our efficient global shipping network allows us to deliver
                  products quickly and reliably.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Paper
                elevation={3}
                sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}
              >
                <Typography variant="h6" color="primary" gutterBottom>
                  Customer-Centric
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  We focus on delivering an exceptional customer experience,
                  ensuring satisfaction with every purchase.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Paper
                elevation={3}
                sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}
              >
                <Typography variant="h6" color="primary" gutterBottom>
                  Innovation
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  We constantly innovate to improve our products, services, and
                  the overall shopping experience.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Core Values List with Icons */}
          <Typography variant="h6" color="primary" sx={{ mt: 5 }} gutterBottom>
            Our Core Values
          </Typography>

          <List sx={{ maxWidth: 600, margin: '0 auto' }}>
            <ListItem>
              <ListItemIcon sx={{ color: 'primary.main' }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography variant="body1" color="textSecondary">
                Offering high-quality products at competitive prices.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: 'primary.main' }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography variant="body1" color="textSecondary">
                Ensuring fast, reliable shipping to all locations.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: 'primary.main' }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography variant="body1" color="textSecondary">
                Striving for innovation in every aspect of our business.
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: 'primary.main' }}>
                <CheckCircle />
              </ListItemIcon>
              <Typography variant="body1" color="textSecondary">
                Building long-term relationships based on trust and
                transparency.
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Container>
  );
};

export default About;
