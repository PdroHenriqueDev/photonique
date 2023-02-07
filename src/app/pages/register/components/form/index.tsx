import Button from '../../../../components/button';
import Input from '../../../../components/input';
import { Container, TextLogin, TextRegister, TextWelcome } from './styles';

function Form() {
  return (
    <Container>
        <TextLogin>Log in</TextLogin>
        <TextWelcome>Sem bem vindo, por favor, faço o login</TextWelcome>
        < Input/>
        < Input/>
        < Button label='Log in' />
        <TextRegister>Não tem uma conta? Cadastre-se</TextRegister>
    </Container>
  );
}

export default Form;
