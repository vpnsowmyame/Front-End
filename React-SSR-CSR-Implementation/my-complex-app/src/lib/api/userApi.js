import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchUserProfile = async () => {
  try {
    // Corrected endpoint to fetch a single user (user with ID 1)
    const response = await api.get('/users/1');
    return response.data;
  } catch (error) {
    console.error('API Error:', error.message);
    throw new Error('Failed to fetch user profile. Please check the API endpoint.');
  }
};