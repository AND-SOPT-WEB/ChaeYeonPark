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
  maxLength = 8,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [ismaxLengthError, setIsMaxLengthError] = useState(false);
  const maxLengthErrorMessage = `${maxLength}자 이하로 입력해주세요.`;

  // 글자 수 세서 바로 화면에 반영하는 onChange + 외부 onChange
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= maxLength) {
      onChange(e);
      setIsMaxLengthError(false);
    } else {
      setIsMaxLengthError(true);
    }
  };

  return (
    <div css={inputWrapper}>
      <input
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        css={inputStyle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isFocused && ismaxLengthError && (
        <span css={errorMessageStyle}>{maxLengthErrorMessage}</span>
      )}
      {isFocused && isError && <span css={errorMessageStyle}> {errorMessage} </span>}
    </div>
  );
};

export default Input;
