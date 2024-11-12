import { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { signupInputWrapper, signupLabelStyle } from "../SignupPage.style";

const SignupPassword = ({ handleChangeStep, handleInputChange, value }) => {
  const [passwordCheck, setPassWordCheck] = useState("");
  const handleChangePasswordCheck = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassWordCheck(e.target.value);
  };

  const isValid = value.PASSWORD === passwordCheck;

  return (
    <div css={signupInputWrapper}>
      <span css={signupLabelStyle}>비밀번호</span>
      <Input
        value={value.PASSWORD}
        onChange={(e) => handleInputChange(e, "PASSWORD")}
        placeholder="비밀번호를 입력해주세요"
        type="password"
      />
      <Input
        value={passwordCheck}
        onChange={(e) => handleChangePasswordCheck(e)}
        placeholder="비밀번호 확인"
        type="password"
        errorMessage="비밀번호가 다릅니다."
        isError={!isValid}
      />
      <Button
        variant="authPage"
        onClick={() => handleChangeStep("HOBBY")}
        disabled={
          !isValid || value.PASSWORD.length < 1 || value.PASSWORD.length > 8
        }
      >
        다음
      </Button>
    </div>
  );
};

export default SignupPassword;
