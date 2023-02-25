export interface InputProps {
  type?: 'text' | 'password';
  value?: string | number;
  maxLength?: string;
  onChange?: (event: any) => void;
  error?: boolean;
  placeholder?: string;
  class?: string;
}