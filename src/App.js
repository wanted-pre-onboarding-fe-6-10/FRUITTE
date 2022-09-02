import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import { lightTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
