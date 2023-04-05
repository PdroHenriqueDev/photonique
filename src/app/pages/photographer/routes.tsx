import { Routes, Route } from 'react-router-dom';
import { Container } from './styles';
import HomePhotographer from './home/index';

export default function LoginRoutes() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePhotographer />} />
      </Routes>
    </Container>
  );
}
