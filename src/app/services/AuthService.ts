import interceptor from './interceptor';

class AuthService {
  API_PHOTONIQUE = import.meta.env.VITE_API_PHOTONIQUE;
  axios = new interceptor();

  login(email: string, password: string) {
    return this.axios.post(`${this.API_PHOTONIQUE}/login`, {
      email,
      password,
    });
  }

  verifyToken(token: string) {
    return this.axios.get(`${this.API_PHOTONIQUE}/login/verify-token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new AuthService();
