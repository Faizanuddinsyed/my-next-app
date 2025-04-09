'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const username = form.get("username");
    const email = form.get("email");
    const password = form.get("password");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      toast.success("Registered successfully! Redirecting to login...");
      setTimeout(() => router.push("/login"), 1500);
    } else {
      toast.error(data.error || "Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-md mx-auto space-y-4 bg-white rounded-lg shadow-md mt-10"
    >
      <h1 className="text-3xl font-bold text-center text-gray-800">Create Account</h1>

      <input
        name="username"
        placeholder="Username"
        className="border border-gray-300 p-2 w-full rounded"
        required
      />

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
        disabled={loading}
        className={`w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? "Creating Account..." : "Register"}
      </button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
