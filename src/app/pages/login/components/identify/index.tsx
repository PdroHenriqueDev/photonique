import { Container } from './styles';
import Button from '@dynamicComponents/button';
import { useNavigate  } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();

  const loginRoute = () => {
    navigate('/login');
  };

  return (
      <Container>
        <Button label='Sou cliente'/>
        <Button label='Sou fotógrafo' onClick={loginRoute}/>
      </Container>
  );
}

export default Form;