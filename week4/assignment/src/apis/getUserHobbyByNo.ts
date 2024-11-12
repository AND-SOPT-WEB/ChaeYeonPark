import { isAxiosError } from "axios";
import serverAxios from "./serverAxios";

const getUserHobbyByNo = async (userNo: number) => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No auth token found. Please log in.");
    }

    const response = await serverAxios.get(`/user/${userNo}/hobby`, {
      headers: {
        token: `${token}`,
      },
    });

    return response.data.result?.hobby;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Failed to retrieve hobby for user:", error);
      throw new Error("Failed to retrieve hobby");
    } else {
      console.error("Unknown Error:", error);
      throw new Error("Unknown error occurred");
    }
  }
};

export default getUserHobbyByNo;
