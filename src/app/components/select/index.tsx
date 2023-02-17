// import { ButtonProps } from '../../models/components/button.model';
import { Select } from './styles';

export default function DynamicSelect() {
//   const { label } = props;
  return (
        <Select>
            <option value="">Sem valor</option>
            <option value="">Teste 1</option>
            <option value="">Teste 2</option>
            <option value="">Teste 3</option>
            <option value="">Teste 4</option>
            <option value="">Teste 5</option>
            <option value="">Teste 6</option>
        </Select>
  );
}