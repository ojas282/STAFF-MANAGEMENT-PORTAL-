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
      whileHover={{ scale: 1.02 }}
      className="relative group float"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <Link
        to={`/department/${slug}`}
        className="relative block glass rounded-xl p-6 card-hover"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#FF0099] transition-colors">{name}</h3>
          <motion.div
            whileHover={{ x: 5 }}
            className="w-8 h-8 rounded-full bg-[#FF0099]/5 flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5 text-[#FF0099]" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}