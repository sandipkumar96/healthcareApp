import axios from "axios";
import { setToken } from "../utils/token";
export const loginAction = async (values) => {
  try {
    if (values.username && values.password) {
      const response = await axios.post(
        process.env.REACT_APP_API_BASE_URL + "login",
        values
      );
      if (response.data.success) {
        setToken(response.data.accessToken);
      }
    }
  } catch (error) {
    return {
      success: error.success,
      message: error.message,
    };
  }
};
