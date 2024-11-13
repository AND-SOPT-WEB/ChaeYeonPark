import { isAxiosError } from "axios";
import serverAxios from "./serverAxios";
import { LoginInfoType } from "../types/authType";

const postLogin = async (loginInfo: LoginInfoType) => {
  try {
    const response = await serverAxios.post("/login", {
      username: loginInfo.username,
      password: loginInfo.password,
    });

    const token = response.data.result?.token;

    if (token) {
      return token;
    }

    throw new Error("Login failed: " + (response.data.code || "Unknown error"));
  } catch (error) {
    if (isAxiosError(error)) {
      const statusCode = error.response?.status;
      let errorMessage = "에러입니다.";

      if (!statusCode) {
        errorMessage = "네트워크 에러입니다.";
      } else if (statusCode >= 500) {
        errorMessage = "서버 내부 에러입니다.";
      } else if (statusCode === 400 || statusCode === 403) {
        errorMessage = "잘못된 아이디/비밀번호 입니다.";
      }
      throw new Error(errorMessage);
    } else {
      throw new Error("담당자에게 문의하세요.");
    }
  }
};

export default postLogin;
