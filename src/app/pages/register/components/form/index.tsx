import Button from '../../../../components/button';
import Input from '../../../../components/input';
import { Container, InputContainer, Label, TextLogin, TextRegister, TextWelcome } from './styles';

function Form() {
  return (
    <Container>
        <TextLogin>Log in</TextLogin>
        <TextWelcome>Junte-se a nós e acesse sua conta</TextWelcome>
        <InputContainer>
            <Label>Email:</Label>
            < Input/>
        </InputContainer>
        <InputContainer>
            <Label>Senha:</Label>
            < Input type="password"/>
        </InputContainer>
        < Button label='log in' />
        <TextRegister>Não tem uma conta? <strong>Cadastre-se</strong></TextRegister>
    </Container>
  );
}

export default Form;
