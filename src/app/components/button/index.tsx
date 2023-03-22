import { ButtonProps } from '../../models/components/button.model'
import { DynamicButton } from './styles'
import Spinner from '../spinner'

export default function Button(props: ButtonProps) {
  const { label, onClick, disabled, isLoading } = props
  return (
    <DynamicButton onClick={onClick} disabled={disabled}>
      {!isLoading ? label : <Spinner />}
    </DynamicButton>
  )
}
