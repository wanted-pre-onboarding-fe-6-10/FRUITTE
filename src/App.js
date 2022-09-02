import { ThemeProvider } from 'styled-components';
import Router from './Routes';
import { lightTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
