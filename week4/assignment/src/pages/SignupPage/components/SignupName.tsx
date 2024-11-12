import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { signupInputWrapper, signupLabelStyle } from "../SignupPage.style";

const SignupName = ({ handleChanegeStep }) => {
  return (
    <div css={signupInputWrapper}>
      <span css={signupLabelStyle}>이름</span>
      <Input
        value=""
        onChange={() => {}}
        placeholder="사용자 이름을 입력해주세요"
      />
      <Button variant="authPage" onClick={() => handleChanegeStep("PASSWORD")}>
        다음
      </Button>
    </div>
  );
};

export default SignupName;
