import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Paper,
  Avatar,
  Button,
  TextField,
  Alert,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

import { useAuth } from '../../hooks/useAuth';
import { useUser } from '../../hooks/useUser';

const UserManageProfile = () => {
  const { user, setUser } = useAuth(); // Access user and token from AuthProvider
  const { modifyUser } = useUser(); // Use modifyUser to update user profile
  const [localUser, setLocalUser] = useState(user || { name: '', address: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [error, setError] = useState(null);

  // Keep local state in sync with user data
  useEffect(() => {
    if (user) {
      setLocalUser(user);
    }
  }, [user]);

  const handleEditClick = () => setIsEditing(true);

  const handleSaveClick = async () => {
    setError(null);
    setUpdateLoading(true);
    try {
      const updatedData = {
        name: localUser.name || '',
        address: localUser.address || '',
      };
      // await modifyUser(localUser.userId, updatedData);
      // setUser({ ...user, ...updatedData }); // Update AuthProvider's user state
      setIsEditing(false);
    } catch {
      setError('Failed to update user profile');
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  if (!user) {
    return (
      <Container>
        <CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, mt: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            alt={localUser?.name || ''}
            src="/static/images/avatar/1.jpg" // Replace with user.imageUrl if available
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          {isEditing ? (
            <>
              <TextField
                label="Name"
                name="name"
                value={localUser.name || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Address"
                name="address"
                value={localUser.address || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              {updateLoading ? (
                <CircularProgress size={24} sx={{ mt: 3 }} />
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3 }}
                  onClick={handleSaveClick}
                >
                  Save
                </Button>
              )}
            </>
          ) : (
            <>
              <Typography variant="h4" gutterBottom>
                {localUser.name}
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid xs={12} sm={6}>
                  <Typography variant="subtitle1">
                    <strong>Email:</strong> {localUser.email || 'N/A'}
                  </Typography>
                </Grid>
                <Grid xs={12} sm={6}>
                  <Typography variant="subtitle1">
                    <strong>Phone:</strong> {localUser.phone || 'N/A'}
                  </Typography>
                </Grid>
                <Grid xs={12} sm={6}>
                  <Typography variant="subtitle1">
                    <strong>Address:</strong> {localUser.address || 'N/A'}
                  </Typography>
                </Grid>
                <Grid xs={12} sm={6}>
                  <Typography variant="subtitle1">
                    <strong>Role:</strong>{' '}
                    {localUser.isAdmin ? 'Admin' : 'User'}
                  </Typography>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                onClick={handleEditClick}
              >
                Edit Profile
              </Button>
            </>
          )}
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default UserManageProfile;
