import { Container } from './styles';
import Button from '@dynamicComponents/button';
import { useNavigate  } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();

  const routeLogin = () => {
    navigate('/login');
  };
  return (
      <Container>
        <Button label='Sou cliente'/>
        <Button label='Sou fotógrafo' onClick={routeLogin}/>
      </Container>
  );
}

export default Form;