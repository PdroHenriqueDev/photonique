import { SelectProps } from 'app/models/components/select.model';
import { Container, Select } from './styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DynamicSelect(props : SelectProps) {
  const { options, onChange, emptyMessa, disabled } = props;
  return (
    <Container>
        <Select onChange={onChange} disabled={disabled}>
            <option value="">{emptyMessa}</option>
            <>
                {
                    options.map((option) => (
                        <option key={option.id} value={option.id ?? option.value}>
                            {option.name}
                        </option>
                    ))
                }
            </>
        </Select>
        <span><ExpandMoreIcon /></span>
    </Container>
  );
}