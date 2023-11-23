import axios from "axios";
import { Token } from "../auth.helper";
import { getContentType } from "../api.helper";
import { IAuthResponse } from "@/types/auth.interface";

export const AuthService = {
  async login({ login, password }: { login: string; password: string }) {
    try {
      const { data } = await axios.post(
        "http://localhost:4200/api/auth/login",
        {
          login: login,
          password: password,
        }
      );

      Token.saveTokens(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async getNewTokens() {
    const refreshToken = Token.getRefreshToken();

    const response = await axios.post<string, { data: IAuthResponse }>(
      process.env.SERVER_URL + "/auth/login/access-token",
      { refreshToken },
      {
        headers: getContentType(),
      }
    );

    if (response.data.accessToken) Token.saveTokens(response.data);

    return response;
  },
};
