import { instance } from "../api.interceptor";

export const MediaService = {
  async isExists(url: string) {
    try {
      const getImage = (
        await instance({
          method: "GET",
          url: `media/${url}`,
        })
      ).data;

      const [image] = await Promise.all([getImage]);

      if (image) return true;
      return false;
    } catch (error) {
      console.log(error);
    }
  },
};
