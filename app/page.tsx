'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold mb-4"
        >
          Welcome to Faizan&apos;s World 🌍
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl max-w-xl"
        >
          Build blazing-fast apps with Next.js, Tailwind, MongoDB, and JWT Auth.
        </motion.p>
        <motion.div
          className="mt-6 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/login">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-lg transition">
              Register
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-950 text-center">
        <h2 className="text-3xl font-semibold mb-8">🔥 Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {["Fast", "Secure", "Responsive"].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{feature}</h3>
              <p>Our app is {feature.toLowerCase()} and optimized for performance!</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-black">
        <motion.h2
          className="text-3xl font-semibold text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Our Team 💻
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 px-6">
          {["Faizan", "Adnan", "Sameer"].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow-md text-center transition"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                {member[0]}
              </div>
              <h3 className="text-xl font-semibold">{member}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {member === "Faizan" ? "Full Stack Developer" : "Frontend Developer"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
