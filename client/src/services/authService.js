import axios from 'axios';

const authURL = 'http://localhost:3001/api/auth';

export const loginUser = async (credentials) => {
  const response = await axios.post(`${authURL}/signin`, credentials);
  return response.data;
};
