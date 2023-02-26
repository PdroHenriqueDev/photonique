export interface InputProps {
  type?: 'text' | 'password';
  value?: string | number;
  maxLength?: string;
  onChange?: (event: any) => void;
  onKeyDown?: ((param?: any) => void) | undefined;
  error?: boolean;
  placeholder?: string;
  class?: string;
}