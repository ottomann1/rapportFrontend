import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosInstance.interceptors.request.use(
    config => {
      // Do something before request is sent, like adding authentication token
      // config.headers.Authorization = `Bearer ${yourToken}`;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  
  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      // Handle response error
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;