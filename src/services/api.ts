import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Ganti dengan base URL API yang sesuai
});

export default api;
