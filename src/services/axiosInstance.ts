import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && originalRequest.url === 'http://localhost:8000/api/token/refresh/') {
      const refreshToken = localStorage.getItem('refreshToken');
      return axiosInstance
        .post('/token/refresh/', { refresh: refreshToken })
        .then(response => {
          localStorage.setItem('token', response.data.access);
          axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + response.data.access;
          originalRequest.headers['Authorization'] = 'Bearer ' + response.data.access;
          return axiosInstance(originalRequest);
        })
        .catch(err => {
          console.error('Refresh token error', err);
          window.location.href = '/login';
          return Promise.reject(err);
        });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
