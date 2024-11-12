import { css } from "@emotion/react";

const theme = {
  color: {
    white: "#FFFFFF",
    bg_white0: "#F8F9FC",
    bg_white1: "#F3F5FB",
    lightgray0: "#EDEEF2",
    lightgray1: "#DFE2E7",
    lightgray2: "#C6CAD4",
    midgray1: "#9FA4AE",
    midgray2: "#6B6F77",
    darkgray: "#3E3F45",
    blackgray: "#222224",
    black: "#17171A",
    bgwhite1: "#F3F5FB",

    purple1: "#5451FF",
    purple2: "#7774FF",
    purple3: "#9997FF",
    purple4: "#BBB9FF",
    purple5: "#DDDCFF",
    purple6: "#EEEEFF",
  },
  font: {
    head: css`
      font-size: 2rem;
      font-weight: 700;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    subHead: css`
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    body: css`
      font-size: 1.2rem;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0px;
    `,
  },
};

export type ColorType = typeof theme.color;
export type FontType = typeof theme.font;

export interface ThemeType {
  color: ColorType;
  font: FontType;
}

export default theme;
