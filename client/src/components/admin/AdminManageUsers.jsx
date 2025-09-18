import React from 'react';
import {
  Container,
  Box,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import UsersList from './UsersList';

import { useUser } from '../../hooks/useUser';
import SearchInput from '../SearchInput';
import PaginationComp from '../PaginationComp';
import Sort from '../Sort';
import { useAuth } from '../../hooks/useAuth';
import { sortOptionsForUsers } from '../../constant/sortingOptions';

const AdminManageUsers = () => {

  const {
    pageNumber,
    totalPages,
    setSearchValue,
    setPageNumber,
    sortOrder,
    setSortOrder,
  } = useUser();

  return (
    <Container>
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
              label={'Search users...'}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Sort
              options={sortOptionsForUsers}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
          </Grid>
        </Grid>
      </Box>

      <UsersList />

      {/* Pagination */}
      <PaginationComp
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages={totalPages}
      />
    </Container>
  );
};

export default AdminManageUsers;
