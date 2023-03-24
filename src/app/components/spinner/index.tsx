import { SpinnerProps } from 'app/models/components/spinner.model';
import { StyledSpinner } from './styles';

export default function Spinner({ size }: SpinnerProps) {
  return <StyledSpinner size={size} />;
}
