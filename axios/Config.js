import http from 'axios';

export default http.create({
  baseURL: '/api',
  timeout: 30000,
  crossDomain: true,
  withCredentials: true
});
