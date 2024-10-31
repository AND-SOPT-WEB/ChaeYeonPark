import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import Header from "./components/header";
import NumberGame from "./components/NumberGame";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Header />
      <NumberGame />
    </ThemeProvider>
  );
}

export default App;
