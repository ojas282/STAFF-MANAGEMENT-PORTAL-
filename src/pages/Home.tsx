import React from 'react';
import { motion } from 'framer-motion';
import DepartmentCard from '../components/DepartmentCard';
import { departments } from '../data/staff';

export default function Home() {
  // Define the desired department order
  const orderedKeys = ['doctors', 'nursing', 'frontDesk', 'menial', 'pharmacy'];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800 mb-8"
      >
        Staff Departments
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orderedKeys.map((slug, index) => (
          <DepartmentCard
            key={slug}
            name={departments[slug]} // Access the correct name
            slug={slug}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}