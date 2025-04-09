'use client';

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ correct import for App Router

export default function Login() {
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setMsg("✅ Login successful!");
      router.push("/"); // ✅ Navigate to homepage after login
    } else {
      setMsg(data.error || "❌ Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto space-y-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-center">Login</h1>

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="border border-gray-300 p-2 w-full rounded"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        className="border border-gray-300 p-2 w-full rounded"
        required
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 w-full rounded hover:bg-green-700"
      >
        Login
      </button>

      {msg && (
        <p className="text-center text-sm text-red-600">
          {msg}
        </p>
      )}
    </form>
  );
}
