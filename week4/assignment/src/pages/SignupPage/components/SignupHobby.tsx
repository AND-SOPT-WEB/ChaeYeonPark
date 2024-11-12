import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { signupInputWrapper, signupLabelStyle } from "../SignupPage.style";

const SignupHobby = () => {
  return (
    <div css={signupInputWrapper
    }>
      <span css={signupLabelStyle}>취미</span>
      <Input
        value=""
        onChange={() => {}}
        placeholder="취미를 입력해주세요"
      />
      <Button variant="authPage">회원가입</Button>
    </div>
  );
};

export default SignupHobby;
