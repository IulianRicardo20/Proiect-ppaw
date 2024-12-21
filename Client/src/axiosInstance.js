import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:7500', 
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwt_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
           
            console.error('Autentificare expirată sau neautorizată.');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
