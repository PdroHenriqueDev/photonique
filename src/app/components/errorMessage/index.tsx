import { ErrorMessageProps } from 'app/models/components/errorMessage.model';
import { StyledErrorMessage } from './styles'

function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <StyledErrorMessage>
            { message }
        </StyledErrorMessage>
    )
}

export default ErrorMessage;