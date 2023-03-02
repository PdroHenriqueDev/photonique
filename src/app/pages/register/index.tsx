import { Container } from './styles';
import PhotographerForm from '../../components/photographerForm';
import PhotographerService from '../../services/PhotographerService';

function Register() {

 async function handleSubmit(formData: any) {
    await PhotographerService.createPhotographer(formData).then((res) => {
        console.log('got here in PhotographerService res', res)
    });
 }

  return (
    <Container>
        <PhotographerForm buttonLabel='Cadastrar' onSubmit={handleSubmit}/>
    </Container>
  );
}

export default Register;
