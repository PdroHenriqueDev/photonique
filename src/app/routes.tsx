import { Routes, Route } from 'react-router-dom';
import LoginComponent from './pages/login';
import HomeComponent from './pages/home';
import { lazy, Suspense } from 'react';

const RegisterForm = lazy(() => import('./pages/register'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/login/*" element={<LoginComponent />} />
      <Route
        path="/cadastrar"
        element={
          <Suspense fallback={<>...</>}>
            <RegisterForm />
          </Suspense>
        }
      />
    </Routes>
  );
}
