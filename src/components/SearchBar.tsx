import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { staffMembers } from '../data/staff';
import { StaffMember } from '../types';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<StaffMember[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim() === '') {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const filtered = staffMembers.filter(staff => {
      const searchLower = searchQuery.toLowerCase();
      return (
        staff.name.toLowerCase().includes(searchLower) ||
        staff.designation.toLowerCase().includes(searchLower) ||
        staff.department.toLowerCase().includes(searchLower) ||
        staff.employeeId.toLowerCase().includes(searchLower)
      );
    });

    setSuggestions(filtered);
    setIsOpen(true);
  };

  const handleSelect = (staff: StaffMember) => {
    navigate(`/staff/${staff.id}`);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto">
      <motion.div
        className="relative"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by name, designation, or ID..."
            className="w-full px-4 py-3 pl-12 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF0099]/30 transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF0099]" />
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full mt-2 glass rounded-xl overflow-hidden z-50"
          >
            {suggestions.map((staff, index) => (
              <motion.div
                key={staff.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleSelect(staff)}
                className="flex items-center gap-4 p-3 hover:bg-[#FF0099]/5 cursor-pointer transition-colors"
              >
                <img
                  src={staff.photo}
                  alt={staff.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FF0099]/20"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{staff.name}</h4>
                  <p className="text-sm text-[#FF0099]">
                    {staff.designation} • {staff.employeeId}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}