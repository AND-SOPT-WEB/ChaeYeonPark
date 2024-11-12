import { Link } from "react-router-dom";
import SignupHobby from "./components/SignupHobby";
import SignupName from "./components/SignupName";
import SignupPassword from "./components/SignupPassword";
import routePath from "../../routers/routePath";
import {
  signupLayout,
  signupLinkStyle,
  signupLinkWrapper,
  signupSpanStyle,
  signupTitleStyle,
} from "./SignupPage.style";
import { useState } from "react";

const SignupPage = () => {
  const [step, setStep] = useState<"NAME" | "PASSWORD" | "HOBBY">("NAME");
  const [value, setValue] = useState({
    NAME: "",
    PASSWORD: "",
    HOBBY: "",
  });

  const handleChangeStep = (step: "NAME" | "PASSWORD" | "HOBBY") => {
    setStep(step);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "NAME" | "PASSWORD" | "HOBBY"
  ) => {
    const value = e.target.value;
    setValue((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  // 

  return (
    <div css={signupLayout}>
      <h1 css={signupTitleStyle}>회원가입</h1>
      {step === "NAME" && (
        <SignupName
          handleChangeStep={handleChangeStep}
          handleInputChange={handleInputChange}
          value={value}
        />
      )}
      {step === "PASSWORD" && (
        <SignupPassword
          handleChangeStep={handleChangeStep}
          handleInputChange={handleInputChange}
          value={value}
        />
      )}
      {step === "HOBBY" && (
        <SignupHobby handleInputChange={handleInputChange} value={value} />
      )}
      <div css={signupLinkWrapper}>
        <span css={signupSpanStyle}>이미 회원이신가요?</span>
        <Link to={routePath.LOGIN} css={signupLinkStyle}>
          로그인
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
