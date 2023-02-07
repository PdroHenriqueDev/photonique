import { Input, Label } from './styles';
import { InputProps } from '../../models/components/input.model';

function Form(props: InputProps) {
  const { label } = props;
  const labelExists = (label && label?.length > 0) || false;
  return (
    <>
        { labelExists &&
            <Label>{label}</Label>
        }
        <Input />
    </>
  );
}

export default Form;