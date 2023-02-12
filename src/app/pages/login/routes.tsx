import { Routes, Route } from 'react-router-dom';
import Form from './components/form';
import IdentifyComponent from './components/identify';
import { Container, ContentContainer } from './styles';

export default function LoginRoutes() {
  return (
        <Container>
            <ContentContainer>
                <Routes>
                    <Route path="/" element={ <Form /> } />
                    <Route path="/quem" element={ <IdentifyComponent /> } />
                </Routes>
            </ContentContainer>
        </Container>
  );
}