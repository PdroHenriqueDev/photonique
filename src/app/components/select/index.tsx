import { SelectProps } from 'app/models/components/select.model';
import { Container, Select } from './styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DynamicSelect({
  options,
  onChange,
  emptyMessa,
  disabled,
  error,
  value,
  valueType,
}: SelectProps) {
  return (
    <Container>
      <Select
        onChange={onChange}
        disabled={disabled}
        error={error}
        value={value}
      >
        <option value="" disabled selected>
          {emptyMessa}
        </option>
        <>
          {options.map((option) => (
            <option
              key={option.id}
              value={
                valueType === 'value' || valueType === 'name'
                  ? option['value' || 'name']
                  : option.id
              }
            >
              {option.name}
            </option>
          ))}
        </>
      </Select>
      <span>
        <ExpandMoreIcon />
      </span>
    </Container>
  );
}
