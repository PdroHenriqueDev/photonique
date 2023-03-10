import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { Container } from './styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './assets/styles/themes/default';
import { GlobalStyle } from './assets/styles/global';
import { SnackbarProvider } from './context/snackBar';

function App() {
  return (
    <Router>
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Container>
            <SnackbarProvider>
                <Routes />
            </SnackbarProvider>
        </Container>
    </ThemeProvider>
    </Router>
  );
}

export default App;
