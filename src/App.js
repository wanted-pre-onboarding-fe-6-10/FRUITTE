import { ThemeProvider } from 'styled-components';
import Router from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
