import { isAxiosError } from "axios";
import serverAxios from "./serverAxios";

const getUserHobbyByNo = async (userNumber: number) => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No auth token found. Please log in.");
    }

    const response = await serverAxios.get(`/user/${userNumber}/hobby`, {
      headers: {
        token: `${token}`,
      },
    });

    return response.data.result?.hobby;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Failed to retrieve hobby for user:", error);
      alert("없는 사용자 입니다.")
      throw new Error("Failed to retrieve hobby");
    } else {
      console.error("Unknown Error:", error);
      throw new Error("Unknown error occurred");
    }
  }
};

export default getUserHobbyByNo;
