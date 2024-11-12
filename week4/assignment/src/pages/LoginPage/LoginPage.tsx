import { Link } from "react-router-dom";
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

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div css={loginLayout}>
      <h1 css={loginTitleStyle}>로그인</h1>
      <div css={loginInputWrapper}>
        <Input
          value={id}
          onChange={(e) => handleChangeInput(e)}
          placeholder="아이디"
        />
        <Input
          value={password}
          onChange={(e) => handleChangePassword(e)}
          placeholder="비밀번호"
        />
        <Button variant="authPage">로그인</Button>
      </div>
      <Link to={routePath.SIGNUP} css={loginLinkStyle}>
        회원가입
      </Link>
    </div>
  );
};

export default LoginPage;
