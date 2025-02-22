import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar, Droplet, Clock, Car as IdCard, MapPin, Phone as Phone2, Calendar as Calendar2, User2, GraduationCap } from 'lucide-react';
import { staffMembers } from '../data/staff';

export default function StaffProfile() {
  const { id } = useParams<{ id: string }>();
  const staff = staffMembers.find(s => s.id === id);

  if (!staff) {
    return <div>Staff member not found</div>;
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
    { icon: Calendar2, label: 'Date of Birth', value: staff.dob },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-8 bg-gray-50 flex flex-col items-center">
            {/* Main Photo */}
            <div className="relative mb-8 w-full max-w-xs">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={staff.photo}
                  alt={staff.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
                <p className="text-sm font-medium text-gray-600">{staff.employeeId}</p>
              </div>
            </div>

            {/* ID Card Image */}
            <div className="relative mb-8 w-full max-w-xs">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={staff.idcard}
                  alt={staff.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
                <p className="text-sm font-medium text-gray-600">{staff.employeeId}</p>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{staff.name}</h2>
              <p className="text-lg text-gray-600">{staff.designation}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-gray-50"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{item.label}</p>
                    <p className="font-medium text-gray-900">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Qualifications</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {staff.qualifications.map((qual, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-gray-400" />
                      <span className="text-gray-700">{qual}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
