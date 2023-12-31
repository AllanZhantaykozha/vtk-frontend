import axios from "axios";
import { errorCatch, getContentType } from "./api.helper";
import { Token } from "./auth.helper";
import { ProfileService } from "./services/profile.service";
import { AuthService } from "./services/auth.service";

export const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: getContentType(),
});

instance.interceptors.request.use(async (config) => {
  const accessToken = Token.getAcessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided") &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        AuthService.getNewTokens();
        return instance.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === "jwt expired") {
          Token.removeTokens();
        }
      }
    }
  }
);
