import { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import {
  passwordInputWrapper,
  showPasswordButton,
  signupInputWrapper,
  signupLabelStyle,
} from "../SignupPage.style";
import { SignupInfoProps } from "../../../types/authType";

const SignupPassword = ({
  signupInfo,
  handleChangeSignupInfo,
  handleChangeSignupStep,
}: SignupInfoProps) => {
  const [passwordCheck, setPassWordCheck] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChangePasswordCheck = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassWordCheck(e.target.value);
  };

  const handleShowPasswordButton = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordMatch = signupInfo.password === passwordCheck;

  return (
    <div css={signupInputWrapper}>
      <span css={signupLabelStyle}>비밀번호</span>
      <div css={passwordInputWrapper}>
        <Input
          value={signupInfo.password}
          onChange={(e) => handleChangeSignupInfo(e, "password")}
          placeholder="비밀번호를 입력해주세요"
          type={showPassword ? `text` : `password`}
        />

        <button css={showPasswordButton} onClick={handleShowPasswordButton}>
          비번보기
        </button>
      </div>
      <Input
        value={passwordCheck}
        onChange={(e) => handleChangePasswordCheck(e)}
        placeholder="비밀번호 확인"
        isError={!isPasswordMatch}
        errorMessage="비밀번호가 일치하지 않습니다."
        type="password"
      />
      <Button
        variant="authPage"
        onClick={() => handleChangeSignupStep("hobby")}
        disabled={!isPasswordMatch}
      >
        다음
      </Button>
    </div>
  );
};

export default SignupPassword;
