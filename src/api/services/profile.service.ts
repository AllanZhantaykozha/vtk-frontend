import { Token } from "../auth.helper";
import { instance } from "../api.interceptor";
import { IAuthResponse } from "@/types/auth.interface";
import axios from "axios";
import { getContentType } from "../api.helper";

export const ProfileService = {
  async getMe() {
    try {
      const { data } = await instance({
        url: "teacher/profile",
        method: "GET",
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
