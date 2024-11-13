import { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { signupInputWrapper, signupLabelStyle } from "../SignupPage.style";
import { SignupInfoProps } from "../../../types/authType";

const SignupPassword = ({
  signupInfo,
  handleChangeSignupInfo,
  handleChangeSignupStep,
}: SignupInfoProps) => {
  const [passwordCheck, setPassWordCheck] = useState("");

  const handleChangePasswordCheck = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassWordCheck(e.target.value);
  };

  const isPasswordMatch = signupInfo.password === passwordCheck;
  const isPasswordValidLength =
    signupInfo.password.length < 1 || signupInfo.password.length > 8;

  return (
    <div css={signupInputWrapper}>
      <span css={signupLabelStyle}>비밀번호</span>
      <Input
        value={signupInfo.password}
        onChange={(e) => handleChangeSignupInfo(e, "password")}
        placeholder="비밀번호를 입력해주세요"
        type="password"
      />
      <Input
        value={passwordCheck}
        onChange={(e) => handleChangePasswordCheck(e)}
        placeholder="비밀번호 확인"
        type="password"
        errorMessage="비밀번호가 일치하지 않습니다."
        isError={!isPasswordMatch}
      />
      <Button
        variant="authPage"
        onClick={() => handleChangeSignupStep("hobby")}
        disabled={!isPasswordMatch || isPasswordValidLength}
      >
        다음
      </Button>
    </div>
  );
};

export default SignupPassword;
