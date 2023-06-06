import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectRoutes() {
  const authToken = localStorage.getItem('token') ?? '';

  return authToken ? <Outlet /> : <Navigate to="/login" />;
}
