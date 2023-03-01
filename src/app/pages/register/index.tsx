import { Container } from './styles';
import PhotographerForm from '../../components/photographerForm';
import PhotographerService from '../../services/PhotographerService';

function Register() {

 async function handleSubmit(formData: any) {
    console.log(formData);
    console.log(PhotographerService.createPhotographer(formData));
 }

  return (
    <Container>
        <PhotographerForm buttonLabel='Cadastrar' onSubmit={handleSubmit}/>
    </Container>
  );
}

export default Register;
