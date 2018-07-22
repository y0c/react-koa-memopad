import http from 'lib/httpClient';

export const addPost = form => http.post('/post', form); 
export const getPosts = () => http.get('/post');