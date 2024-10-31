import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import Content from "./components/Content";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Content />
    </ThemeProvider>
  );
}

export default App;
