import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import StaffCard from '../components/StaffCard';
import { staffMembers, departments } from '../data/staff';

export default function Department() {
  const { slug } = useParams<{ slug: string }>();
  const departmentStaff = staffMembers.filter(staff => staff.department === slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FF0099] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Departments</span>
        </Link>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800 mb-8"
      >
        {departments[slug as keyof typeof departments]}
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {departmentStaff.map((staff, index) => (
          <StaffCard key={staff.id} staff={staff} index={index} />
        ))}
      </div>
    </div>
  );
}