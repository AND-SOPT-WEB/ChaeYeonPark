import { isAxiosError } from "axios";
import serverAxios from "./serverAxios";

const getUserHobbyByNo = async (userNumber: number) => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await serverAxios.get(`/user/${userNumber}/hobby`, {
      headers: {
        token: `${token}`,
      },
    });
    return response.data.result?.hobby;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error("없는 사용자 입니다.");
    } else {
      throw new Error("담당자에게 문의하세요.");
    }
  }
};

export default getUserHobbyByNo;
