import React from 'react';
import { motion } from 'framer-motion';
import DepartmentCard from '../components/DepartmentCard';
import SearchBar from '../components/SearchBar';
import AnimatedBackground from '../components/AnimatedBackground';
import { departments } from '../data/staff';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <SearchBar />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
        >
          Staff Departments
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {Object.entries(departments).map(([slug, name], index) => (
            <DepartmentCard
              key={slug}
              name={name}
              slug={slug}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}