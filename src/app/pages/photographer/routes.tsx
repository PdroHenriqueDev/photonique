import { Routes, Route } from 'react-router-dom';
import { Container } from './styles';
import HomePhotographer from './home/index';
import NavBar from '@components/navBar';

export default function LoginRoutes() {
  return (
    <Container>
      <NavBar isPhotographer={false} />
      <Routes>
        <Route path="/" element={<HomePhotographer />} />
      </Routes>
    </Container>
  );
}
