import { ITokens } from "@/types/tokens.interface";
import Cookies from "js-cookie";

export const Token = {
  saveTokens(dto: ITokens) {
    Cookies.set("accessToken", dto.accessToken);
    Cookies.set("refreshToken", dto.refreshToken);
  },

  removeTokens() {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  },

  getAcessToken() {
    const accessToken = Cookies.get("accessToken");
    return accessToken || null;
  },

  getRefreshToken() {
    const refreshToken = Cookies.get("refreshToken");
    return refreshToken || null;
  },
};
