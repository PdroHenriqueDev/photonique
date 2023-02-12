import { Routes, Route } from 'react-router-dom';
import LoginComponent from './pages/login';

export default function AppRoutes() {
  return (
        <Routes>
            <Route path="/login//*" element={ <LoginComponent /> } />
        </Routes>
  );
}