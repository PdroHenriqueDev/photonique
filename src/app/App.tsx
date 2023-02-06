import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import { Container } from './styles'

function App() {
  return (
    <Router>
      <Container>
        <Routes />
      </Container>
    </Router>
  );
}

export default App;
