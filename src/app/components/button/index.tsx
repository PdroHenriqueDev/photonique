// import Spinner from '../Spinner';
import { ButtonProps } from '../../models/components/button.model';
import { DynamicButton } from './styles';

export default function Button(props: ButtonProps) {
  const { label, onClick, disabled } = props;
  return (
        <DynamicButton onClick={onClick} disabled={disabled}>
            {label}
        </DynamicButton>
  );
}