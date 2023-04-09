import NavBar from '@components/navBar';
import Routes from './routes';
import { Container, ContentContainer } from './styles';

function Photographer() {
  return (
    <Container>
      <NavBar isPhotographer={false} />
      <ContentContainer>
        <Routes />
      </ContentContainer>
    </Container>
  );
}

export default Photographer;
