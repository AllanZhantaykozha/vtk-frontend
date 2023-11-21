import { instance } from "../api.interceptor";

export const TeacherService = {
  async getAll() {
    try {
      const getData = (
        await instance({
          url: "teacher",
          method: "GET",
        })
      ).data;

      const [data] = await Promise.all([getData]);

      return data;
    } catch (error) {
      console.log(error);
    }
  },

  async byId(id: number) {
    try {
      const getData = (
        await instance({ url: `teacher/id/${id}`, method: "GET" })
      ).data;

      const [data] = await Promise.all([getData]);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
