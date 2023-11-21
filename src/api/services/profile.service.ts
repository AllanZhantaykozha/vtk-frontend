import { getAcessToken, getRefreshToken } from "../auth.helper";
import { instance } from "../api.interceptor";
import { IAuthResponse } from "@/types/auth.interface";
import axios from "axios";
import { getContentType } from "../api.helper";
import { saveTokens } from "../auth.helper";

export const ProfileService = {
  async getMe() {
    try {
      const accessToken = getAcessToken();

      if (!accessToken) return false;

      const getData = (
        await instance({ url: "teacher/profile", method: "GET" })
      ).data;

      const [data] = await Promise.all([getData]);

      return data;
    } catch (error) {
      console.log(error);
    }
  },

  async isAdmin() {
    try {
      const accessToken = getAcessToken();

      if (!accessToken) return false;

      const response = (
        await instance({ url: "teacher/profile", method: "GET" })
      ).data;

      const [data] = await Promise.all([response]);

      if (data.isAdmin) return true;

      return false;
    } catch (error) {
      console.log(error);
    }
  },

  async getNewTokens() {
    const refreshToken = getRefreshToken();

    const response = await axios.post<string, { data: IAuthResponse }>(
      process.env.SERVER_URL + "/auth/login/access-token",
      { refreshToken },
      {
        headers: getContentType(),
      }
    );

    if (response.data.accessToken) saveTokens(response.data);

    return response;
  },
};
