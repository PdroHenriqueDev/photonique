import { CepProps } from 'app/models/service/cepService.model';
import axios from './interceptor';
import CepMappers from './mappers/CepMappers';

class CepService {
  API_PHOTONIQUE = import.meta.env.VITE_API_PHOTONIQUE;

  async getCepInfo(cepDigits: string): Promise<CepProps> {
    const { data } = await axios.get(`${this.API_PHOTONIQUE}/cep/${cepDigits}`);
    const { data: responseData } = data;

    const responseMapper = CepMappers.toPersistance(responseData);
    return responseMapper;
  }
}

export default new CepService();
