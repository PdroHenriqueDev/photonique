import { Routes, Route } from 'react-router-dom';
import LoginComponent from './pages/login';
import HomeComponent from './pages/home';
import { lazy, Suspense } from 'react';
import Photographer from './pages/photographer/indext';

const RegisterForm = lazy(() => import('./pages/register'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/login/*" element={<LoginComponent />} />
      <Route path="/fotografos/*" element={<Photographer />} />
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
