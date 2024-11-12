import { css, Theme } from "@emotion/react";

export const loginLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 10rem;
`;

export const loginTitleStyle = (theme: Theme) => css`
  ${theme.font.head}
`;

export const loginInputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const loginLinkStyle = (theme: Theme) => css`
  ${theme.font.body}
  color: ${theme.color.midgray2};
`;
