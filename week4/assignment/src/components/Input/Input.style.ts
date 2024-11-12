import { css, Theme } from "@emotion/react";

export const inputWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const inputStyle = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25rem;
  height: 4.5rem;

  border: 1.5px solid ${theme.color.lightgray0};
  border-radius: 10px;
  padding-left: 1rem;
`;

export const errorMessageStyle = (theme: Theme) => css`
  color: ${theme.color.error};
`;
