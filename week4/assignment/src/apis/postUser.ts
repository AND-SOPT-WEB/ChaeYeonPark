import { isAxiosError } from "axios";
import serverAxios from "./serverAxios";

export const postUser = async (value: any) => {
  try {
    const response = await serverAxios.post("/user", {
      username: value.NAME,
      password: value.PASSWORD,
      hobby: value.HOBBY,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const statusCode = error.response?.status;
      let errorMessage = "error occurred";
      console.log("Axios Error - Status Code:", statusCode);
      if (!statusCode) {
        errorMessage = "Network error";
      } else if (statusCode >= 500) {
        errorMessage = "Server error";
      } else if (statusCode === 400 || statusCode === 404) {
        errorMessage = "잘못된 요청";
        alert("중복된 닉네임 입니다.");
      } else if (statusCode === 409) {
        alert("중복된 닉네임 입니다.");
      }

      throw new Error(errorMessage);
    } else {
      console.error("Unknown Error:", error);
      throw new Error("unknown error");
    }
  }
};
