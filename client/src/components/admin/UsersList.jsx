import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';

import { useUser } from '../../hooks/useUser';
import { useAuth } from '../../hooks/useAuth';

const UsersList = () => {
  const { isAdmin, isLoggedIn, token } = useAuth(); // Access from AuthProvider
  const {
    users,
    fetchUsers,
    removeUser,
    isLoading,
    error,
    pageNumber,
    pageSize,
    totalPages,
    setSearchValue,
    setPageNumber,
    sortOrder,
    setSortOrder,
  } = useUser();

  const [selectedUserId, setSelectedUserId] = useState(null);

  // Fetch users only if the user is logged in and isAdmin
  useEffect(() => {
    if (isLoggedIn && isAdmin) {
      fetchUsers('', pageNumber, pageSize, 'name_asc', token); // Pass token if needed
    }
  }, [isLoggedIn, isAdmin, pageNumber, pageSize, token]);

  const handleDelete = async (id) => {
    try {
      await removeUser(id, token); // Pass token if needed
    } catch (err) {
      console.error('Failed to delete user:', err);
    }
  };

  return (

      <TableContainer
        component={Paper}
        sx={{
          overflowX: 'scroll',
          display: { xs: 'block', sm: 'block', md: 'table' },
        }}
      >
        {isLoading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow
                  key={user.userId}
                  onClick={() => setSelectedUserId(user.userId)}
                  sx={{
                    backgroundColor:
                      selectedUserId === user.userId
                        ? 'rgba(0, 123, 255, 0.2)'
                        : index % 2 === 0
                        ? 'rgba(0, 0, 0, 0.04)'
                        : 'white',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
                    cursor: 'pointer',
                  }}
                >
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDelete(user.userId)}
                      sx={{ ml: 1 }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
   
  );
};

export default UsersList;
