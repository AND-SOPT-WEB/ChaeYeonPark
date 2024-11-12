import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { signupInputWrapper, signupLabelStyle } from "../SignupPage.style";

const SignupName = ({ handleChangeStep, handleInputChange, value }) => {
  return (
    <div css={signupInputWrapper}>
      <span css={signupLabelStyle}>이름</span>
      <Input
        value={value.NAME}
        onChange={(e) => handleInputChange(e, "NAME")}
        placeholder="사용자 이름을 입력해주세요"
      />
      <Button
        variant="authPage"
        onClick={() => handleChangeStep("PASSWORD")}
        disabled={value.NAME.length < 1 || value.NAME.length > 8}
      >
        다음
      </Button>
    </div>
  );
};

export default SignupName;
