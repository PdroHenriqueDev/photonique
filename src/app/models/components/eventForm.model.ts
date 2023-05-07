import { Dayjs } from 'dayjs';

export interface EventFormComponentProps {
  form: EventFormProps;
}

export interface EventFormProps {
  [key: string]: string | Dayjs | null | undefined;
  name: string;
  local: string;
  category: string;
  state: string;
  city: string;
  date: Dayjs | null | undefined;
}
