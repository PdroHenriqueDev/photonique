export interface InputProps {
  class?: string;
  error?: boolean;
  maxLength?: string;
  onChange?: (event: any) => void;
  onKeyDown?: ((param?: any) => void) | undefined;
  placeholder?: string;
  type?: 'text' | 'password';
  value?: string | number;
  disabled?: boolean;
}
