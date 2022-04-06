import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000/api' });

export const readUser = () => API.get('/read');

export const signUp = (email, password) => API.post('/signup', { email, password });
