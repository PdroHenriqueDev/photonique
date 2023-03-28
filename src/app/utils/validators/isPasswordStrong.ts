export const isPasswordStrong = (password: string): string => {
  if (password.length < 8) return 'A senha deve ter pelo menos 8 caracteres.';
  if (!password.match(/[A-Z]/))
    return 'A senha deve ter pelo menos uma letra maiúscula';
  if (!password.match(/[a-z]/))
    return 'A senha deve ter pelo menos uma letra minúscula';
  if (!password.match(/[0-9]/)) return 'A senha deve ter pelo menos um número';
  if (password.match(/^(.)\1+$/))
    return 'A senha não deve ter caracteres repetidos';
  return '';
};
