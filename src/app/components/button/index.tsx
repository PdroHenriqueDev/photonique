// import Spinner from '../Spinner';
import { ButtonProps } from '../../models/button.model';
import { DynamicButton } from './styles';

export default function Button(props: ButtonProps) {
  const { label } = props;
  return (
        <DynamicButton>
            {label}
        </DynamicButton>
  );
}