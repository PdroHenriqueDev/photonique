// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosRequestConfig } from 'axios';
import interceptor from './interceptor';
import { PhotographerProps } from 'app/models/photographer/photographer.mode';
import PhotographerMapper from './mappers/PhotographerMapper';
import { EventFormProps } from 'app/models/components/eventForm.model';
import EventMapper from './mappers/EventMapper';

class PhotographerService {
  API_PHOTONIQUE = import.meta.env.VITE_API_PHOTONIQUE;
  axios = new interceptor();

  createPhotographer(photographer: PhotographerProps) {
    const photographerMapper = PhotographerMapper.toDomain(photographer);
    return this.axios.post(
      `${this.API_PHOTONIQUE}/photographers/create`,
      photographerMapper,
    );
  }

  createEvent(event: EventFormProps) {
    const eventMapper = EventMapper.toDomain(event);
    return this.axios.post(
      `${this.API_PHOTONIQUE}/photographers/event`,
      eventMapper,
    );
  }

  uploadFile(file: File, config?: AxiosRequestConfig) {
    const formData = new FormData();
    formData.append('file', file);

    return this.axios.post(
      `${this.API_PHOTONIQUE}/photographers/photo/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        ...config,
      },
    );
  }
}

export default new PhotographerService();
