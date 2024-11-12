import { css, Theme } from "@emotion/react";

export const signupLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 10rem;
`;

export const signupTitleStyle = (theme: Theme) => css`
  ${theme.font.head}
`;

export const signupInputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const signupLabelStyle = (theme: Theme) => css`
  ${theme.font.subHead}
  color: ${theme.color.midgray2};
`;

export const signupLinkWrapper = css`
  display: flex;
  gap: 0.5rem;
`;

export const signupSpanStyle = (theme: Theme) => css`
  ${theme.font.body}
  color: ${theme.color.midgray2};
`;

export const signupLinkStyle = (theme: Theme) => css`
  ${theme.font.body}
  color: ${theme.color.purple3};
`;
