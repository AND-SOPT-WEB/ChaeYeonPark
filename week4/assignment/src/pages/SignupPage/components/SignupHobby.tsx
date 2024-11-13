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
}: SignupInfoProps) => {
  const navigate = useNavigate();

  // 에러 핸들링 수정
  const handleClickSignupButton = async () => {
    try {
      const res = await postUser(signupInfo);
      if (res) {
        alert(`회원가입 성공! 회원번호 : ${res.result.no}`);
        navigate(routePath.LOGIN);
      }
    } catch {
      handleChangeSignupStep("username");
      // 빈칸 초기화 되도록 추가
    }
  };

  const isHobbyValidLength = signupInfo.hobby.length < 1 || signupInfo.hobby.length > 8

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
