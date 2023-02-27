import { Container } from './styles';
import PhotographerForm from '../../components/photographerForm'

function Register() {

 async function handleSubmit(formData: any) {
    console.log(formData);
 }

  return (
    <Container>
        <PhotographerForm buttonLabel='Cadastrar' onSubmit={handleSubmit}/>
    </Container>
  );
}

export default Register;
