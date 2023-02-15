// import Spinner from '../Spinner';
import { ButtonProps } from '../../models/components/button.model';
import { DynamicButton } from './styles';

export default function Button(props: ButtonProps) {
  const { label, onClick } = props;
  return (
        <DynamicButton onClick={onClick}>
            {label}
        </DynamicButton>
  );
}