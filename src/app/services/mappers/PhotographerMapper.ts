import { PhotographerProps } from 'app/models/photographer/photographer.mode';

class PhotographerMapper {
  // toPersistance(domainPhotographer) {
  //     return {

  //     }
  // }

  toDomain(persistancePhotographer: PhotographerProps) {
    return {
      name: persistancePhotographer.name,
      email: persistancePhotographer.email,
      cpf: persistancePhotographer.cpf.replace(/\D/g, ''),
      gender_id: persistancePhotographer.gender,
      phone: persistancePhotographer.phone.replace(/\D/g, ''),
      zip_code: persistancePhotographer.zipCode.replace(/\D/g, ''),
      state: persistancePhotographer.state,
      city: persistancePhotographer.city,
      address: persistancePhotographer.address,
      neighborhood: persistancePhotographer.neighborhood,
      address_number: persistancePhotographer.number,
      address_complement: persistancePhotographer.complement,
      password: persistancePhotographer.password,
      confirmPassword: persistancePhotographer.confirmPassword,
    };
  }
}

export default new PhotographerMapper();
