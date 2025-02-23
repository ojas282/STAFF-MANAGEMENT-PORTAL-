import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone, Calendar, Droplet, Clock, Car as IdCard, MapPin,
  Phone as Phone2, Calendar as Calendar2, User2, GraduationCap,
  ArrowLeft, Share2, Heart, Mail
} from 'lucide-react';
import { staffMembers, departments } from '../data/staff';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function StaffProfile() {
  const { id } = useParams<{ id: string }>();
  const staff = staffMembers.find(s => s.id === id);

  if (!staff) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-bold text-gray-800">Staff member not found</h2>
          <Link to="/" className="text-[#FF0099] hover:underline mt-4 inline-block">
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  const infoItems = [
    { icon: Phone, label: 'Phone', value: staff.phone },
    { icon: Calendar, label: 'Joining Date', value: staff.joiningDate },
    { icon: Droplet, label: 'Blood Group', value: staff.bloodGroup },
    { icon: Clock, label: 'Shift Timings', value: staff.shiftTimings },
    { icon: IdCard, label: 'Employee ID', value: staff.employeeId },
    { icon: MapPin, label: 'Address', value: staff.address },
    { icon: Phone2, label: 'Emergency Contact', value: staff.emergencyContact },
    { icon: Calendar2, label: 'ID Issue Date', value: staff.idIssueDate },
    { icon: User2, label: 'Gender', value: staff.gender },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-12 px-4">
      <div className="container mx-auto">
        {/* Navigation Bar */}
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            to={`/department/${staff.department}`}
            className="flex items-center gap-2 text-gray-600 hover:text-[#FF0099] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to {departments[staff.department as keyof typeof departments]}</span>
          </Link>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-[#FF0099]/5 transition-colors"
            >
              <Share2 className="w-5 h-5 text-[#FF0099]" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-[#FF0099]/5 transition-colors"
            >
              <Heart className="w-5 h-5 text-[#FF0099]" />
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Photos */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Profile Photo */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={staff.photo}
                alt={staff.name}
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-2xl font-bold text-white mb-2">{staff.name}</h1>
                  <p className="text-white/90">{staff.designation}</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >

            </motion.div>
          </motion.div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass p-4 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF0099]/5 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#FF0099]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-medium text-gray-900">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Qualifications */}
            <motion.div
              className="glass p-6 rounded-xl"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#FF0099]/5 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#FF0099]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Qualifications</h3>
              </div>
              <div className="grid gap-4">
                {staff.qualifications.map((qual, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#FF0099]" />
                    <span className="text-gray-700">{qual}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}