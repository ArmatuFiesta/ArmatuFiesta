import axios from 'axios';
import jwt_decode from "jwt-decode";
import {useHistory} from "react-router-dom";

export const httpClient = axios.create({
  baseURL: 'http://localhost:8000/api',
});

/** Interceptor para bearer token de JWT */
httpClient.interceptors.request.use(request => {
  if (!!localStorage.getItem('token')) {
    request.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }

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
  console.log(error);
  if (error.response.status === 401) {
    // La solicitud fue rechazada. Veamos si es por expiración del token
    const token = localStorage.getItem('token');
    const payload = jwt_decode(token);
    const now = new Date();
    if (payload.exp < now) {
      // el token expiró.
      console.log("Token expiró");
      const originalConfig = error.config;
      originalConfig._retry = true;
      const refresh = localStorage.getItem('refresh');
      console.log(`refresh: ${refresh}`);
      httpClient.post('/token/refresh/', {refresh})
        .then(({access}) => {
          if (!!access) {
            // Solo seteamos el token si tuvimos éxito
            localStorage.setItem('token', access);
            originalConfig.headers['Authorization'] = `Bearer ${access}`;
            axios(originalConfig);
          }
        })
        // Vamos al formulario de login
        .catch(() => useHistory().push('/login-page'));

    }
  }

  return Promise.reject(error);
});
export default httpClient;