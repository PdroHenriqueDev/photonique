export const phoneMask = (value: string): string => {
  let number = value.replace(/\D+/g, '')
  let length = number.length

  if (length > 10) {
    number = number.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3')
  }
  if (length > 2) {
    number = number.replace(/^(\d\d)(\d{0,5})/, '($1) $2')
  }

  return number
}
