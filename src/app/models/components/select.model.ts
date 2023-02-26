interface Options {
  id: string | number
  name: string;
  value?: any;
}

export interface SelectProps {
  options: Array<Options>;
  onChange?: (param?: any) => void;
  onKeyDown?: ((param?: any) => void) | undefined;
  emptyMessa: string;
  value?: string;
  disabled?: boolean;
}
