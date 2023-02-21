import { SelectProps } from 'app/models/components/select.model';
import { Select } from './styles';

export default function DynamicSelect(props : SelectProps) {
  const { options, onChange } = props;
  return (
    <Select onChange={onChange}>
        <option value="">Selectione</option>
        <>
            {
                options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))
            }
        </>
    </Select>
  );
}