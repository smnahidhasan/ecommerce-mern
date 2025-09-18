import axios from 'axios';

const baseURL = 'http://localhost:3001/api/products';

// baseURL?pageNumber=1&pageSize=10&search=lala&sortOrder=name_asc

export const getAllProducts = async (
  pageNumber = 1,
  pageSize = 5,
  searchValue = '',
  sortOrder = 'name_asc'
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
  const response = await axios.get(`${baseURL}?${params.toString()}`);
  return response.data;
};

export const getProductById = async (id) => {
  console.log(`${baseURL}/${id}`);
  const response = await axios.get(`${baseURL}/${id}`);
  return response.data;
};

export const createProduct = async (productData) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(`${baseURL}/`, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const token = localStorage.getItem('token');
  const response = await axios.put(`${baseURL}/${id}`, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteProduct = async (id) => {
  const token = localStorage.getItem('token');
  await axios.delete(`${baseURL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
