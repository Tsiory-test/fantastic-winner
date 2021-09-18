import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'http://localhost:8080'
});

export const setToken = (token) => {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    let status = null;

    if (error.response) {
        if (error.response.status) {
            status = error.response.status;
        }
    }

    if (401 === status) {
        window.localStorage.removeItem('jwtToken');
        window.localStorage.removeItem('user');
    } else {
        return Promise.reject(error);
    }
});

export default axiosInstance;