interface Options {
  id: string | number
  name: string;
}

export interface SelectProps {
  options: Array<Options>;
  onChange?: (param?: any) => void;
  emptyMessa: string;
}
