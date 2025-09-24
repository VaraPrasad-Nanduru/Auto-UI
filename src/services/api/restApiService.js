import axios from 'axios';

// 1. Create a base axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASEURL_BACKEND, // Replace with your backend URL
  headers: { 'Content-Type': 'application/json' },
});

// 2. Add request interceptor for auth token (optional)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // example
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// 3. Generic REST request function
const restRequest = async ({ method, url, data, headers }) => {
  try {
    const response = await api({ method, url, data, headers });
    return response.data;
  } catch (error) {
    console.error('REST API Error:', error);
    throw error;
  }
};

// 4. Export helper functions for simplicity
export const get = (url, headers) => restRequest({ method: 'get', url, headers });
export const post = (url, data, headers) => restRequest({ method: 'post', url, data, headers });
export const put = (url, data, headers) => restRequest({ method: 'put', url, data, headers });
export const del = (url, headers) => restRequest({ method: 'delete', url, headers });
