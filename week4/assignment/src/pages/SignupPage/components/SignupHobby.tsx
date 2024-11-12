import { useNavigate } from "react-router-dom";
import { postUser } from "../../../apis/postUser";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { signupInputWrapper, signupLabelStyle } from "../SignupPage.style";
import routePath from "../../../routers/routePath";

const SignupHobby = ({ handleChangeStep, handleInputChange, value }) => {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      const res = await postUser(value);
      if (res) {
        alert(`회원가입 성공! 회원번호 : ${res.result.no}`);
        navigate(routePath.LOGIN);
      }
    } catch {
      handleChangeStep("NAME");
    }
  };

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
        onClick={() => handleButtonClick()}
      >
        회원가입
      </Button>
    </div>
  );
};

export default SignupHobby;
