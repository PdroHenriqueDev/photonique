// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { PhotographerProps } from 'app/models/photographer/photographer.mode';
import PhotographerMapper from './mappers/PhotographerMapper';
import { PhotographerServiceProps } from 'app/models/services/photographerService.model';

class PhotographerService {
    API_HOST = process.env.REACT_APP_API_HOST!;

    createPhotographer(photographer: PhotographerProps): Promise<PhotographerServiceProps> {
        const photographerMapper = PhotographerMapper.toDomain(photographer);
        return axios.post(`${this.API_HOST}/photographers/create`, photographerMapper);
    }
}

export default new PhotographerService();