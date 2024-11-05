import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import Game from "./pages/Game";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Game />
    </ThemeProvider>
  );
}

export default App;
