import { ITokens } from "@/types/tokens.interface";
import Cookies from "js-cookie";

export const saveTokens = (dto: ITokens) => {
  Cookies.set("accessToken", dto.accessToken);
  Cookies.set("refreshToken", dto.refreshToken);
};

export const removeTokens = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

export const getAcessToken = () => {
  const accessToken = Cookies.get("accessToken");
  return accessToken || null;
};

export const getRefreshToken = () => {
  const refreshToken = Cookies.get("refreshToken");
  return refreshToken || null;
};
