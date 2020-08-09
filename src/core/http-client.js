import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://localhost:8000/api',
});

/** Interceptor para bearer token de JWT */
httpClient.interceptors.request.use(request => {
  request.headers['Authorization'] = `Bearer: ${localStorage.getItem('token')}`;

  return request;
}, error => Promise.reject(error));


/** Interceptor para colocar último / en las peticiones */
httpClient.interceptors.request.use(request => {
  if (!request.url.endsWith('/')) {
    request.url += '/';
  }

  return request
}, error => Promise.reject(error));


/** Interceptor para refrescar el token */
httpClient.interceptors.response.use(response => {
  return response
}, error => {
  if (error.status === 401) {
    // La solicitud fue rechazada. Veamos si es por expiración del token
  }

  return Promise.reject(error);
});
