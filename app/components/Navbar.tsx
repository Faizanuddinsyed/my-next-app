'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can replace with any icons or SVG

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Next-App</div>

        {/* Hamburger icon */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav links - Desktop */}
        <div className="hidden sm:flex space-x-6">
          <Link href="/" className="hover:underline hover:text-yellow-300 transition">Home</Link>
          <Link href="/about" className="hover:underline hover:text-yellow-300 transition">About</Link>
          <Link href="/contact" className="hover:underline hover:text-yellow-300 transition">Contact</Link>
          <Link href="/login" className="hover:underline hover:text-yellow-300 transition">Login</Link>
          <Link href="/register" className="hover:underline hover:text-yellow-300 transition">Register</Link>
        </div>
      </div>

      {/* Nav links - Mobile */}
      {isOpen && (
        <div className="sm:hidden mt-4 space-y-3 px-2">
          <Link href="/" className="block hover:text-yellow-300">Home</Link>
          <Link href="/about" className="block hover:text-yellow-300">About</Link>
          <Link href="/contact" className="block hover:text-yellow-300">Contact</Link>
          <Link href="/login" className="block hover:text-yellow-300">Login</Link>
          <Link href="/register" className="block hover:text-yellow-300">Register</Link>
        </div>
      )}
    </nav>
  );
}
