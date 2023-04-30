import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { Container } from './styles';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');
export default function DatePickerValue({
  value,
  onChange,
}: DatePickerProps<Dayjs | null>) {
  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            className={'date-picker'}
            defaultValue={dayjs()}
            value={value}
            onChange={onChange}
            format="DD/MM/YYYY"
          />
        </DemoContainer>
      </LocalizationProvider>
    </Container>
  );
}
