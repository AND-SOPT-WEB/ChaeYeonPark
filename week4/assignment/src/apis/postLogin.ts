import { isAxiosError } from "axios";
import serverAxios from "./serverAxios";

const postLogin = async (username: string, password: string) => {
  try {
    const response = await serverAxios.post("/login", {
      username,
      password,
    });

    const token = response.data.result?.token;

    if (token) {
      localStorage.setItem("authToken", token);
      return token;
    }

    throw new Error("Login failed: " + (response.data.code || "Unknown error"));
  } catch (error) {
    if (isAxiosError(error)) {
      const statusCode = error.response?.status;
      let errorMessage = "error occurred";
      if (!statusCode) {
        errorMessage = "Network error";
      } else if (statusCode >= 500) {
        errorMessage = "Server error";
      } else if (statusCode === 400 || statusCode === 403) {
        errorMessage = "잘못된 비밀번호 입니다.";
      }

      console.error(errorMessage);
      alert(`${errorMessage}`);
      throw new Error(errorMessage);
    } else {
      console.error("Unknown Error:", error);
      throw new Error("Unknown error occurred");
    }
  }
};

export default postLogin;
