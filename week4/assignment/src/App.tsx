import { Global, ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import authRoutes from "./routers/authRoutes";
import myPageRoutes from "./routers/myPageRoutes";

const App = () => {
  const router = createBrowserRouter([...authRoutes, ...myPageRoutes]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
