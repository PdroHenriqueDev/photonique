import Button from '../../../../components/button';
import Input from '../../../../components/input';
import { Container, TextLogin } from './styles';

function Form() {
  return (
    <Container>
        <TextLogin>Login</TextLogin>
        < Input/>
        < Input/>
        < Button label='Login' />
    </Container>
  );
}

export default Form;
