import http from 'lib/httpClient';

export const localLogin = form => http.post('/auth/login', form);
export const localSignup = form => http.post('/auth/register', form);
export const socialSignup = form => http.post('/auth/social/login', form);