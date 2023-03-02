import { SelectHTMLAttributes } from "react";

interface Options {
  id: string | number
  name: string;
  value?: any;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<Options>;
  onChange?: (param?: any) => void;
  onKeyDown?: ((param?: any) => void) | undefined;
  emptyMessa: string;
  value?: string;
  valueType?: 'id' | 'value' | 'name'
  disabled?: boolean;
  error?: boolean;
}
