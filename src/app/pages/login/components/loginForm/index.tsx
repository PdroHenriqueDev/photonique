import Button from '../../../../components/button';
import Input from '../../../../components/input';
import { Container, InputContainer, Label, TextLogin, TextRegister, TextWelcome } from './styles';
import { useNavigate  } from 'react-router-dom';

function Form() {

  const navigate = useNavigate();
  const registerRoute = () => {
    console.log('got here');
    navigate('/cadastrar');
  };

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
        <TextRegister>Não tem uma conta? <strong onClick={registerRoute}>Cadastre-se</strong></TextRegister>
    </Container>
  );
}

export default Form;
