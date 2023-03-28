import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, ContentContainer } from './styles';

const LoginForm = lazy(() => import('./components/loginForm'));

export default function LoginRoutes() {
  return (
    <Container>
      <ContentContainer>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<>...</>}>
                <LoginForm />
              </Suspense>
            }
          />
        </Routes>
      </ContentContainer>
    </Container>
  );
}
