import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { SignupInfoProps } from "../../../types/authType";
import { signupInputWrapper, signupLabelStyle } from "../SignupPage.style";

const SignupName = ({
  signupInfo,
  handleChangeSignupInfo,
  handleChangeSignupStep,
}: SignupInfoProps) => {
  const isNameValidLength =
    signupInfo.username.length < 1 || signupInfo.username.length > 8;

  return (
    <div css={signupInputWrapper}>
      <span css={signupLabelStyle}>이름</span>
      <Input
        value={signupInfo.username}
        onChange={(e) => handleChangeSignupInfo(e, "username")}
        placeholder="사용자 이름을 입력해주세요"
      />
      <Button
        variant="authPage"
        onClick={() => handleChangeSignupStep("password")}
        disabled={isNameValidLength}
      >
        다음
      </Button>
    </div>
  );
};

export default SignupName;
