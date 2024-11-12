import { isAxiosError } from "axios";
import serverAxios from "./serverAxios";

const getUserHobby = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No auth token found. Please log in.");
    }

    const response = await serverAxios.get("/user/my-hobby", {
      headers: {
        token: `${token}`,
      },
    });

    return response.data.result?.hobby;
  } catch (error) {
    if (isAxiosError(error)) {
      const statusCode = error.response?.status;
      let errorMessage = "error occurred";

      if (!statusCode) {
        errorMessage = "Network error";
      } else if (statusCode >= 500) {
        errorMessage = "Server error";
      } else if (statusCode === 400 || statusCode === 404) {
        errorMessage = "잘못된 요청";
      } else if (error.response?.data.code === "00") {
        errorMessage = "Failed to retrieve hobby information";
      }

      console.error(errorMessage);
      throw new Error(errorMessage);
    } else {
      console.error("Unknown Error:", error);
      throw new Error("Unknown error occurred");
    }
  }
};

export default getUserHobby;
