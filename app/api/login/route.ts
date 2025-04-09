import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/lib/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  await connectDB();

  // 🔍 Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // 🔒 Compare hashed passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // 🔑 Generate JWT token
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "1d" } // you can change to "1h" or "7d" as needed
  );

  // 🍪 Set token in cookies
  const res = NextResponse.json({ message: "Login successful" });
  res.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only true in production
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 1 day in seconds
    path: "/",
  });

  return res;
}
