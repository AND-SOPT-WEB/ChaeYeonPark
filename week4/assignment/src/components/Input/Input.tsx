import { InputHTMLAttributes, useState } from "react";
import { errorMessageStyle, inputStyle, inputWrapper } from "./Input.style";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  errorMessage?: string;
}

const Input = ({
  value,
  onChange,
  placeholder,
  isError,
  errorMessage,
  type,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const maxLengthErrorMessage = "8자 이하로 입력해주세요.";

  const isValidMaxLength = value.length < 1 || value.length > 8;

  // 글자 수 세서 바로 화면에 반영하는 onChange + 외부 onChange
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <div css={inputWrapper}>
      <input
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        type={type}
        css={inputStyle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isFocused && (isValidMaxLength || isError) && (
        <span css={errorMessageStyle}>
          {isValidMaxLength ? maxLengthErrorMessage : errorMessage}{" "}
        </span>
      )}
    </div>
  );
};

export default Input;
