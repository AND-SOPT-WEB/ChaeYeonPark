import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import routePath from "../../routers/routePath";
import {
  loginInputWrapper,
  loginLayout,
  loginLinkStyle,
  loginTitleStyle,
} from "./LoginPage.style";
import postLogin from "../../apis/postLogin";
import { LoginInfo, LoginInfoType } from "../../types/authType";

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChangeLoginInfo = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: LoginInfo
  ) => {
    const value = e.target.value;
    setLoginInfo((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleClickLoginButton = async (loginInfo: LoginInfoType) => {
    try {
      const token = await postLogin(loginInfo);
      localStorage.setItem("authToken", token); // 로컬스토리지에 토큰 저장
      navigate(routePath.MYPAGE);
    } catch (error) {
      alert(`${error}`);
    }
  };

  return (
    <div css={loginLayout}>
      <h1 css={loginTitleStyle}>로그인</h1>
      <div css={loginInputWrapper}>
        <Input
          value={loginInfo.username}
          onChange={(e) => handleChangeLoginInfo(e, "username")}
          placeholder="아이디"
        />
        <Input
          value={loginInfo.password}
          onChange={(e) => handleChangeLoginInfo(e, "password")}
          placeholder="비밀번호"
        />
        <Button
          variant="authPage"
          onClick={() => handleClickLoginButton(loginInfo)}
        >
          로그인
        </Button>
      </div>
      <Link to={routePath.SIGNUP} css={loginLinkStyle}>
        회원가입
      </Link>
    </div>
  );
};

export default LoginPage;
