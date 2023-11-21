import axios from "axios";
import { saveTokens } from "../auth.helper";

export const AuthService = {
  async login({ login, password }: { login: string; password: string }) {
    try {
      const getData = (
        await axios.post("http://localhost:4200/api/auth/login", {
          login: login,
          password: password,
        })
      ).data;

      const [data] = await Promise.all([getData]);

      saveTokens(data);
    } catch (error) {
      console.log(error);
    }
  },
};
