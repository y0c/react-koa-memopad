import axios from 'axios';
import config from 'config';
import storage from 'lib/storage';

const instance = axios.create({
    baseURL : config.backendUrl,
    headers : { 'Authorization' : `Bearer ${storage.get('accessToken')}`}
});


export default instance;