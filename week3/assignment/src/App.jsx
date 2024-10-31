import { Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import Header from "./components/header";
import NumberGame from "./components/NumberGame";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <AppLayout>
        <Header />
        <NumberGame />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;
