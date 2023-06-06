import axios from 'axios';

class AuthService {
  API_PHOTONIQUE = import.meta.env.VITE_API_PHOTONIQUE;

  login(email: string, password: string) {
    return axios.post(`${this.API_PHOTONIQUE}/login`, {
      email,
      password,
    });
  }

  verifyToken(token: string) {
    return axios.get(`${this.API_PHOTONIQUE}/login/verify-token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new AuthService();
