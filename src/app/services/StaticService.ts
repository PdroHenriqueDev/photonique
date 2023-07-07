import axios from './interceptor';

class StaticService {
  API_PHOTONIQUE = import.meta.env.VITE_API_PHOTONIQUE;

  getCategories() {
    return axios.get('/static-data/categories');
  }
}

export default new StaticService();
