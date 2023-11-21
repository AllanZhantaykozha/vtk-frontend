import { instance } from "../api.interceptor";

export async function update(data: {
  firstname: string;
  secondname: string;
  surname: string;
  description: string;
  jobName: string;
  group: string;
  cellNumber: string;
}) {
  try {
    await instance({ url: "teacher", method: "PUT", data });

    return "success";
  } catch (error) {
    console.log(error);
  }
}
