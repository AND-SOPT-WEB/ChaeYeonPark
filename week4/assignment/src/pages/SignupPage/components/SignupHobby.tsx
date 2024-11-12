import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { signupInputWrapper, signupLabelStyle } from "../SignupPage.style";

const SignupHobby = ({ handleInputChange, value }) => {
  return (
    <div css={signupInputWrapper}>
      <span css={signupLabelStyle}>취미</span>
      <Input
        value={value.HOBBY}
        onChange={(e) => handleInputChange(e, "HOBBY")}
        placeholder="취미를 입력해주세요"
      />
      <Button
        variant="authPage"
        disabled={value.HOBBY.length < 1 || value.HOBBY.length > 8}
      >
        회원가입
      </Button>
    </div>
  );
};

export default SignupHobby;
