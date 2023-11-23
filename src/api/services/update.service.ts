import { IUpdateTeacher } from "@/types/update.interface";
import { instance } from "../api.interceptor";

export const UpdateService = {
  async update(updateData: IUpdateTeacher) {
    try {
      const { data } = await instance({
        url: "teacher",
        method: "PUT",
        data: updateData,
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
