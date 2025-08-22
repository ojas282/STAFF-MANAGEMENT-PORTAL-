import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { StaffMember } from '../types';

interface StaffCardProps {
  staff: StaffMember;
  index: number;
}

export default function StaffCard({ staff, index }: StaffCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow w-full max-w-sm mx-auto"
    >
      <Link to={`/staff/${staff.id}`}>
        <div className="aspect-[2/3] relative">
          <img 
            src={staff.photo} 
            alt={staff.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-lg font-semibold text-white">{staff.name}</h3>
            <p className="text-purple-200">{staff.designation}</p>
          </div>
        </div>
        <div className="p-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">ID: {staff.employeeId}</p>
          <p className="text-sm text-purple-600">{staff.department}</p>
        </div>
      </Link>
    </motion.div>
  );
}