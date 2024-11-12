import { css, Theme } from "@emotion/react";

export const MyHeaderWrapper = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  color: ${theme.color.white};
  background-color: ${theme.color.purple4};
  width: 100%;
`;

export const MyHeaderTitleWrapper = css`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MyHeaderTitleStyle = (theme: Theme) => css`
  ${theme.font.head}
`;

export const MyHeaderButtonStyle = (theme: Theme) => css`
  ${theme.font.subHead}
  padding: 0;
  color: ${theme.color.white};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const MyHeaderTextStyle = (theme: Theme) => css`
  ${theme.font.subHead}
`;

export const MyContentLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 10rem;
`;

export const MyContentTitleStyle = (theme: Theme) => css`
  ${theme.font.head}
`;

export const MyContentInputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MyContentLabelStyle = (theme: Theme) => css`
  ${theme.font.subHead}
  color: ${theme.color.midgray2};
`;

export const MyContentTextStyle = (theme: Theme) => css`
  ${theme.font.body}
`;
