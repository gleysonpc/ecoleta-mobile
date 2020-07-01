import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.70.9:3333',
});

export default api;
