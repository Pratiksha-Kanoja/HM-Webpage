import axios from 'axios';

var BackendURL = "https://handm-clone.onrender.com/api/v1";
const api = axios.create({baseURL : BackendURL})

export default api;