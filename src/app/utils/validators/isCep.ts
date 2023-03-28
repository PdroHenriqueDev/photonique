export const isCepValid = (cep: string) => {
  const cepFormatted = cep.replace(/\D/g, '');
  const validcep = /^[0-9]{8}$/;
  const sameCaracteres = /^(\d)\1+$/;

  const isCepValid =
    validcep.test(cepFormatted) && !sameCaracteres.test(cepFormatted);

  return isCepValid;
};
