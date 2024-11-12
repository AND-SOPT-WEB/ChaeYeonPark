import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { signupInputWrapper, signupLabelStyle } from "../SignupPage.style";

const SignupPassword = ({ handleChanegeStep }) => {
  return (
    <div css={signupInputWrapper}>
      <span css={signupLabelStyle}>비밀번호</span>
      <Input
        value=""
        onChange={() => {}}
        placeholder="비밀번호를 입력해주세요"
      />
      <Input value="" onChange={() => {}} placeholder="비밀번호 확인" />
      <Button variant="authPage" onClick={() => handleChanegeStep("HOBBY")}>
        다음
      </Button>
    </div>
  );
};

export default SignupPassword;
