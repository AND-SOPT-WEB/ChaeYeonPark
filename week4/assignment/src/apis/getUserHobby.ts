import { isAxiosError } from "axios";
import serverAxios from "./serverAxios";

const getUserHobby = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await serverAxios.get("/user/my-hobby", {
      headers: {
        token: `${token}`,
      },
    });

    return response.data.result?.hobby;
  } catch (error) {
    if (isAxiosError(error)) {
      const statusCode = error.response?.status;
      let errorMessage = "에러가 발생했습니다.";

      if (!statusCode) {
        errorMessage = "네트워크 에러입니다.";
      } else if (statusCode >= 500) {
        errorMessage = "서버 내부 에러입니다.";
      } else if (
        statusCode === 401 ||
        statusCode === 403 ||
        statusCode === 404
      ) {
        errorMessage = "잘못된 요청입니다.";
      }

      throw new Error(errorMessage);
    } else {
      throw new Error("담당자에게 문의하세요.");
    }
  }
};

export default getUserHobby;
