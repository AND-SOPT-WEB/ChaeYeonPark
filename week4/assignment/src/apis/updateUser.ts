import { isAxiosError } from "axios";
import serverAxios from "./serverAxios";

const updateUser = async (password: string, hobby: string) => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No auth token found. Please log in.");
    }

    const response = await serverAxios.put(
      "/user",
      { hobby, password },
      {
        headers: {
          token: `${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Failed to update user data:", error);
      throw new Error("Failed to update user data");
    } else {
      console.error("Unknown Error:", error);
      throw new Error("Unknown error occurred");
    }
  }
};

export default updateUser;
