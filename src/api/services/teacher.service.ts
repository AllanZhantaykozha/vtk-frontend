import { instance } from "../api.interceptor";

export const TeacherService = {
  async getAll() {
    try {
      const { data } = await instance({
        url: "teacher",
        method: "GET",
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  },

  async byId(id: number) {
    try {
      const { data } = await instance({
        url: `teacher/id/${id}`,
        method: "GET",
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
