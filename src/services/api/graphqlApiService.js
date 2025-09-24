// api/graphqlApiService.js
import axios from 'axios';

const graphqlClient = axios.create({
  baseURL: 'import.meta.env.VITE_REACT_APP_BASEURL_BACKEND', // Replace with your GraphQL endpoint
  headers: { 'Content-Type': 'application/json' },
});

export const graphqlRequest = async ({ query, variables }) => {
  try {
    const response = await graphqlClient.post('', { query, variables });
    if (response.data.errors) {
      throw new Error(JSON.stringify(response.data.errors));
    }
    return response.data.data;
  } catch (error) {
    console.error('GraphQL API Error:', error);
    throw error;
  }
};
