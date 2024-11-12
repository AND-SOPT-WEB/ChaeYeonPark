import { ButtonHTMLAttributes } from "react";
import { buttonColor, buttonStyle, disabledStyle } from "./Button.style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  variant: "authPage" | "myPage";
}

const Button = ({ disabled, variant, onClick, children }: ButtonProps) => {
  return (
    <button
      css={[buttonStyle, buttonColor[variant], disabled && disabledStyle]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
