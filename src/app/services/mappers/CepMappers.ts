import {
  CepProps,
  CepServiceResponseProps,
} from 'app/models/service/cepService.model';

class CepMapper {
  toPersistance(domainCep: CepServiceResponseProps): CepProps {
    return {
      zipCode: domainCep.zip_code,
      state: domainCep.state,
      city: domainCep.city,
      neighborhood: domainCep.neighborhood,
      address: domainCep.address,
      complement: domainCep.address_complement,
    };
  }
}

export default new CepMapper();
