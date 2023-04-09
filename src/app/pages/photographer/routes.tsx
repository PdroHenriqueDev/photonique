import { Routes, Route } from 'react-router-dom';
import HomePhotographer from './pages/home/index';

export default function LoginRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePhotographer />} />
    </Routes>
  );
}
