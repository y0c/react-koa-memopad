import http from 'lib/httpClient';

export const getMyInfo = () => http.get('/user/me');