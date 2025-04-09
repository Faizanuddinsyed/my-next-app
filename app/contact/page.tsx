'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');

    // For now, just log or show message. Later, connect with backend
    console.log({ name, email, message });
    setMsg("Thank you for reaching out! 🚀");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-white mb-6">Contact Us 📬</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
          >
            Send Message
          </button>
        </form>

        {msg && (
          <p className="text-green-600 dark:text-green-400 text-center mt-4 font-medium">
            {msg}
          </p>
        )}
      </div>
    </div>
  );
}
