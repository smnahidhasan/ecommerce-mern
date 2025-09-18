import axios from 'axios';

const baseURL = 'http://localhost:3001/api/users';

export const createUser = async (userData) => {
  const response = await axios.post(`${baseURL}/`, userData);
  return response.data;
};

export const getAllUsers = async (
  pageNumber = 1,
  pageSize = 5,
  searchValue = '',
  sortOrder = 'name_asc',
  token
) => {
  const params = new URLSearchParams();

  params.append('pageNumber', pageNumber);
  params.append('pageSize', pageSize);

  if (searchValue) {
    params.append('search', searchValue);
  }

  if (sortOrder) {
    params.append('sortOrder', sortOrder);
  }

  const authToken = token || localStorage.getItem('token');


  const response = await axios.get(`${baseURL}?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
};

export const getUserById = async (id) => {
  console.log('id: ' + id);
  const token = localStorage.getItem('token');
  const response = await axios.get(`${baseURL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteUser = async (id) => {
  const token = localStorage.getItem('token');
  await axios.delete(`${baseURL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUser = async (id, userData) => {
  const token = localStorage.getItem('token');
  const response = await axios.put(`${baseURL}/${id}`, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
