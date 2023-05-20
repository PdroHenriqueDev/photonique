// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { PhotographerProps } from 'app/models/photographer/photographer.mode';
import PhotographerMapper from './mappers/PhotographerMapper';
import { ServiceResponseProps } from 'app/models/service/serviceResponse.model';
import { EventFormProps } from 'app/models/components/eventForm.model';
import EventMapper from './mappers/EventMapper';

class PhotographerService {
  API_PHOTONIQUE = import.meta.env.VITE_API_PHOTONIQUE;

  createPhotographer(
    photographer: PhotographerProps,
  ): Promise<ServiceResponseProps> {
    const photographerMapper = PhotographerMapper.toDomain(photographer);
    return axios.post(
      `${this.API_PHOTONIQUE}/photographers/create`,
      photographerMapper,
    );
  }

  login(email: string, password: string) {
    return axios.post(`${this.API_PHOTONIQUE}/login`, {
      email,
      password,
    });
  }

  createEvent(event: EventFormProps) {
    const eventMapper = EventMapper.toDomain(event);
    return axios.post(
      `${this.API_PHOTONIQUE}/photographers/event`,
      eventMapper,
    );
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return axios.post(
      `${this.API_PHOTONIQUE}/photographers/photo/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  }
}

export default new PhotographerService();
