import { useNavigate  } from 'react-router-dom';
import Button from '../../../../components/button';
import Input from '../../../../components/input';
import { Container, TextLogin, TextRegister, TextWelcome, FormRow } from './styles';

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
        <FormRow>
            <Input placeholder="Email" />
        </FormRow>

        <FormRow>
            <Input type="password"/>
        </FormRow>
        <Button label='log in' />
        <TextRegister>Não tem uma conta? <strong aria-hidden="true" onClick={registerRoute}>Cadastre-se</strong></TextRegister>
    </Container>
  );
}

export default Form;
