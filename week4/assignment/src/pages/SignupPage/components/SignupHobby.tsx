import { useNavigate } from "react-router-dom";
import { postUser } from "../../../apis/postUser";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { signupInputWrapper, signupLabelStyle } from "../SignupPage.style";
import routePath from "../../../routers/routePath";
import { SignupInfoProps } from "../../../types/authType";

const SignupHobby = ({
  signupInfo,
  handleChangeSignupInfo,
  handleChangeSignupStep,
  handleResetInput,
}: SignupInfoProps) => {
  const navigate = useNavigate();

  const handleClickSignupButton = async () => {
    try {
      const response = await postUser(signupInfo);
      if (response) {
        alert(`회원가입 성공! 회원번호 : ${response.no}`);
        navigate(routePath.LOGIN);
      }
    } catch (error) {
      alert(`${error}`);
      handleChangeSignupStep("username");
      handleResetInput?.();
    }
  };

  const isHobbyValidLength =
    signupInfo.hobby.length < 1 || signupInfo.hobby.length > 8;

  return (
    <div css={signupInputWrapper}>
      <span css={signupLabelStyle}>취미</span>
      <Input
        value={signupInfo.hobby}
        onChange={(e) => handleChangeSignupInfo(e, "hobby")}
        placeholder="취미를 입력해주세요"
      />
      <Button
        variant="authPage"
        disabled={isHobbyValidLength}
        onClick={() => handleClickSignupButton()}
      >
        회원가입
      </Button>
    </div>
  );
};

export default SignupHobby;
