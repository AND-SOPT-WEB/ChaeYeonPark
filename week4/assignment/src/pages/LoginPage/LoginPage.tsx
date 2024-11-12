import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import routePath from "../../router/routePath";
import {
  loginInputWrapper,
  loginLayout,
  loginLinkStyle,
  loginTitleStyle,
} from "./LoginPage.style";

const LoginPage = () => {
  return (
    <div css={loginLayout}>
      <h1 css={loginTitleStyle}>로그인</h1>
      <div css={loginInputWrapper}>
        <Input value="" onChange={() => {}} placeholder="아이디" />
        <Input value="" onChange={() => {}} placeholder="비밀번호" />
        <Button variant="authPage">로그인</Button>
      </div>
      <Link to={routePath.SIGNUP} css={loginLinkStyle}>
        회원가입
      </Link>
    </div>
  );
};

export default LoginPage;
