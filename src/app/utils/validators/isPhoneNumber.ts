export const isPhoneNumber = (phoneNumber: string) => {
  const regex = /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/;
  return regex.test(phoneNumber);
};
