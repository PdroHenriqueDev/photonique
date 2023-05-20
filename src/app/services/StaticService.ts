import axios from 'axios';
import { ServiceResponseProps } from 'app/models/service/serviceResponse.model';

class StaticService {
  API_PHOTONIQUE = import.meta.env.VITE_API_PHOTONIQUE;

  getCategories(): Promise<ServiceResponseProps> {
    return axios.get(`${this.API_PHOTONIQUE}/static-data`);
  }
}

export default new StaticService();
