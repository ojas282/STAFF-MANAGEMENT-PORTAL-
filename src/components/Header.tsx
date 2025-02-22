import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          {/* Logo Image */}
          <img
            src="/drarti.jpg" // Ensure correct path
            alt="Hospital Logo"
            className="w-[120px] h-[60px] object-contain sm:w-[150px] sm:h-[75px] md:w-[180px] md:h-[90px] lg:w-[200px] lg:h-[100px]" // Responsive sizes
          />
        </Link>
        {/* Smaller Text to the Right of the Logo */}
        <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700">
          Staff Management Portal
        </p>
      </div>
    </motion.header>
  );
}