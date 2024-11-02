// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://candle-backend-production.up.railway.app/', // replace with your actual base URL
});

export default axiosInstance;
