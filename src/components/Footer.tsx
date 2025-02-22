import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dr. Arti Hospital</h3>
            <p className="text-gray-400">Providing quality healthcare since 2014</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>0522-3545662</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>drartihospital2023@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>C-193/5 Dr. Arti Hospital, Rajajipuram, Lucknow, 226017</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="http://www.drartihospital.com"
                  className="hover:text-purple-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dr. Arti Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}