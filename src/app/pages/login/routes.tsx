import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import IdentifyComponent from './components/identify'
import { Container, ContentContainer } from './styles'

const LoginForm = lazy(() => import('./components/loginForm'))

export default function LoginRoutes() {
  return (
    <Container>
      <ContentContainer>
        <Routes>
          <Route path="/" element={<IdentifyComponent />} />

          <Route
            path="/login"
            element={
              <Suspense fallback={<>...</>}>
                <LoginForm />
              </Suspense>
            }
          />
        </Routes>
      </ContentContainer>
    </Container>
  )
}
