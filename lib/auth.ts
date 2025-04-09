// lib/auth.ts
import { cookies } from "next/headers";

export function getTokenFromCookies() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  return token;
}
