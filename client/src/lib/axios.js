import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL:"http://backend:3000/api",
    withCredentials:true
});
