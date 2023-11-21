import { ILoginPassword } from "@/types/login.interface";
import { instance } from "../api.interceptor";

export const AdminService = {
  async createTeacher(data: ILoginPassword) {
    await instance({ url: "teacher/create", method: "POST", data });

    return "success";
  },

  async deleteTeacher(data: ILoginPassword) {
    await instance({ url: "teacher/delete", method: "POST", data });

    return "success";
  },
};
