import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Form from './components/form';
import IdentifyComponent from './components/identify';
import { Container, ContentContainer } from './styles';

const Form = React.lazy(() => import('./components/form'));

export default function LoginRoutes() {
  return (
        <Container>
            <ContentContainer>
                <Routes>
                    <Route path="/" element={
                        <React.Suspense fallback={<>...</>}>
                        <Form />
                      </React.Suspense>
                     } />
                    <Route path="/quem" element={ <IdentifyComponent /> } />
                </Routes>
            </ContentContainer>
        </Container>
  );
}