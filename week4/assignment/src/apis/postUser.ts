import { isAxiosError } from "axios";
import serverAxios from "./serverAxios";
import { SignupInfoType } from "../types/authType";

export const postUser = async (signupInfo: SignupInfoType) => {
  try {
    const response = await serverAxios.post("/user", {
      username: signupInfo.username,
      password: signupInfo.password,
      hobby: signupInfo.hobby,
    });
    return response.data.result;
  } catch (error) {
    if (isAxiosError(error)) {
      const statusCode = error.response?.status;
      let errorMessage = "에러가 발생했습니다.";

      if (!statusCode) {
        errorMessage = "네트워크 에러입니다.";
      } else if (statusCode >= 500) {
        errorMessage = "서버 내부 에러입니다.";
      } else if (
        statusCode === 400 ||
        statusCode === 404 ||
        statusCode === 409
      ) {
        errorMessage = "중복된 닉네임 입니다.";
      }

      throw new Error(errorMessage);
    } else {
      throw new Error("담당자에게 문의하세요.");
    }
  }
};
