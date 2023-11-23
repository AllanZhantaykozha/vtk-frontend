import { instance } from "../api.interceptor";

export const PostService = {
  async getAll() {
    try {
      const { data } = await instance({ url: "post", method: "GET" });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async byId(id: number) {
    try {
      const { data } = await instance({ url: `post/id/${id}`, method: "GET" });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
