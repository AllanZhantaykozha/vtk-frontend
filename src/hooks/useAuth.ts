import axios from "axios";
import { cookies } from "next/headers";

export async function useAuth() {
  try {
    const accessToken = cookies().get("accessToken")?.value;

    if (!accessToken) return false;

    await axios.get("http://localhost:4200/api/teacher/profile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
}
