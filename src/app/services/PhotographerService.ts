// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosRequestConfig } from 'axios';
import axios from './interceptor';
import { PhotographerProps } from 'app/models/photographer/photographer.mode';
import PhotographerMapper from './mappers/PhotographerMapper';
import { EventFormProps } from 'app/models/components/eventForm.model';
import EventMapper from './mappers/EventMapper';

class PhotographerService {
  API_PHOTONIQUE = import.meta.env.VITE_API_PHOTONIQUE;

  createPhotographer(photographer: PhotographerProps) {
    const photographerMapper = PhotographerMapper.toDomain(photographer);
    return axios.post('/photographers/create', photographerMapper);
  }

  createEvent(event: EventFormProps) {
    const eventMapper = EventMapper.toDomain(event);
    return axios.post('/photographers/event', eventMapper);
  }

  uploadFile(file: File, config?: AxiosRequestConfig) {
    const formData = new FormData();
    formData.append('file', file);

    return axios.post('/photographers/photo/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      ...config,
    });
  }
}

export default new PhotographerService();
