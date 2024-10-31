import "./reset.css";
import { css } from "@emotion/react";
import theme from "./theme";

const GlobalStyle = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 62.5%;
    scrollbar-width: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  #root {
    width: 100%;
    min-height: 100dvh;
    background-color: ${theme.color.bg_white1};
    margin: 0 auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
