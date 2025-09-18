import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const SearchInput = ({setSearchValue, label}) => {
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      onChange={handleSearchChange}
      margin="normal"
    />
  );
};

SearchInput.propTypes = {
  setSearchValue: PropTypes.func,
  label: PropTypes.string,
}
export default SearchInput;
