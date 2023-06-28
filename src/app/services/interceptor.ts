import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

class AxiosInterceptor {
  private api: AxiosInstance;
  private API_PHOTONIQUE: string;

  constructor() {
    this.API_PHOTONIQUE = import.meta.env.VITE_API_PHOTONIQUE;

    this.api = axios.create({
      baseURL: this.API_PHOTONIQUE,
    });

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token ? `Bearer ${token}` : '';
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          const originalRequest = error.config;

          if (!originalRequest._retry) {
            originalRequest._retry = true;

            this.logoutUser();

            return axios(originalRequest);
          }
        }

        return Promise.reject(error);
      },
    );
  }

  logoutUser() {
    localStorage.clear();
    window.location.href = '/login';
  }

  get(url: string, config?: AxiosRequestConfig) {
    return this.api.get(url, config);
  }

  post(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.api.post(url, data, config);
  }

  put(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.api.put(url, data, config);
  }
}

export default AxiosInterceptor;
