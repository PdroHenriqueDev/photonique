import { Routes, Route } from 'react-router-dom';
import LoginComponent from './pages/login';
import HomeComponent from './pages/home';
import { lazy, Suspense } from 'react';
import Photographer from './pages/photographer/index';
import ProtectRoutes from './utils/protectRoutes';

const RegisterForm = lazy(() => import('./pages/register'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectRoutes />}>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/fotografos/*" element={<Photographer />} />
      </Route>
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
