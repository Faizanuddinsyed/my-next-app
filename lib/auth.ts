import { cookies } from "next/headers";

export async function getTokenFromCookies() {
  const cookieStore = await cookies(); // ✅ await only if it’s a Promise
  const token = cookieStore.get("token")?.value;
  return token;
}
