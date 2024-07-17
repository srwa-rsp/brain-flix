import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://unit-3-project-api-0a5620414506.herokuapp.com/',
});

axiosInstance.interceptors.request.use(
  config => {
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
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
