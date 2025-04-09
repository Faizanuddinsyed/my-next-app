'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8 text-center space-y-16">
      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold text-blue-700 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        We are a team of passionate developers on a mission to build amazing and scalable web experiences with modern technologies.
      </motion.p>

      {/* Image */}
      <motion.div
        className="overflow-hidden rounded-2xl shadow-xl max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Teamwork"
          width={1200}
          height={600}
          className="rounded-2xl w-full h-auto object-cover"
          priority
        />
      </motion.div>

      {/* Our Team Section */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center text-blue-700 dark:text-white">Our Team 💻</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
          {["Faizan", "Adnan", "Sameer"].map((member, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                {member[0]}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{member}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {member === "Faizan" ? "Full Stack Developer" : "Frontend Developer"}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
