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
import { useState } from "react";
import postLogin from "../../apis/postLogin";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (username: string, password: string) => {
    try {
      const token = await postLogin(username, password);
      navigate(routePath.MYPAGE);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div css={loginLayout}>
      <h1 css={loginTitleStyle}>로그인</h1>
      <div css={loginInputWrapper}>
        <Input
          value={username}
          onChange={(e) => handleChangeInput(e)}
          placeholder="아이디"
        />
        <Input
          value={password}
          onChange={(e) => handleChangePassword(e)}
          placeholder="비밀번호"
        />
        <Button
          variant="authPage"
          onClick={() => handleLogin(username, password)}
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
