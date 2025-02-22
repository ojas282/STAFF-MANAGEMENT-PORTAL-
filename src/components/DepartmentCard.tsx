import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface DepartmentCardProps {
  name: string;
  slug: string;
  delay: number;
}

export default function DepartmentCard({ name, slug, delay }: DepartmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <Link to={`/department/${slug}`} className="block p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <ArrowRight className="w-5 h-5 text-purple-600" />
        </div>
      </Link>
    </motion.div>
  );
}