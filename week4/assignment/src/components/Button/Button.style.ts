import { css, Theme } from "@emotion/react";

export const buttonStyle = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25rem;
  height: 4.5rem;
  padding: 1rem;

  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  ${theme.font.subHead};
`;

export const buttonColor = {
  authPage: (theme: Theme) => css`
    color: ${theme.color.white};
    background-color: ${theme.color.purple4};

    :hover {
      background-color: ${theme.color.purple1};
    }
  `,

  myPage: (theme: Theme) => css`
    color: ${theme.color.white};
    background-color: ${theme.color.purple1};
  `,
};

export const disabledStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  background-color: ${theme.color.lightgray1};

  :hover {
    background-color: ${theme.color.lightgray1};
  }
`;
