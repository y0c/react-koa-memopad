import axios from 'axios';
import config from 'config';
import storage from 'lib/storage';

const instance = axios.create({
    baseURL : config.backendUrl
});

instance.interceptors.request.use(function(config) {
    const token = storage.get('accessToken');

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function(err) {
    return Promise.reject(err);
});

export default instance;