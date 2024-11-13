import { useState } from "react";
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
import { SignupInfo } from "../../types/authType";

const SignupPage = () => {
  const [signupStep, setSignupStep] = useState<SignupInfo>("username");
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    password: "",
    hobby: "",
  });

  const handleResetInput = () => {
    setSignupInfo({
      username: "",
      password: "",
      hobby: "",
    });
  };

  const handleChangeSignupStep = (step: SignupInfo) => {
    setSignupStep(step);
  };

  const handleChangeSignupInfo = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: SignupInfo
  ) => {
    const value = e.target.value;
    setSignupInfo((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div css={signupLayout}>
      <h1 css={signupTitleStyle}>회원가입</h1>
      {signupStep === "username" && (
        <SignupName
          signupInfo={signupInfo}
          handleChangeSignupInfo={handleChangeSignupInfo}
          handleChangeSignupStep={handleChangeSignupStep}
        />
      )}
      {signupStep === "password" && (
        <SignupPassword
          signupInfo={signupInfo}
          handleChangeSignupInfo={handleChangeSignupInfo}
          handleChangeSignupStep={handleChangeSignupStep}
        />
      )}
      {signupStep === "hobby" && (
        <SignupHobby
          signupInfo={signupInfo}
          handleChangeSignupInfo={handleChangeSignupInfo}
          handleChangeSignupStep={handleChangeSignupStep}
          handleResetInput={handleResetInput}
        />
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
