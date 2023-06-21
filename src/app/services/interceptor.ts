import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

class AxiosInterceptor {
  private api: AxiosInstance;
  private PI_PHOTONIQUE: string;
  private token: string = localStorage.getItem('token') ?? '';

  constructor() {
    this.PI_PHOTONIQUE = import.meta.env.VITE_API_PHOTONIQUE;

    this.api = axios.create({
      baseURL: this.PI_PHOTONIQUE,
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

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
