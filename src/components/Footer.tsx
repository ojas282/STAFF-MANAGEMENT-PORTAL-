import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Heart, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/dr-arti-hospital/posts/?feedView=all', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/drartihospital/', label: 'Instagram' },
];

const contactInfo = [
  { icon: Phone, text: '0522-35545662', href: 'tel:+91052235545662' },
  { icon: Mail, text: 'drartihospital2023@gmail.com', href: 'mailto:drartihospital2023@gmail.com' },
  { icon: MapPin, text: 'C-193/5 Rajajipuram, Lucknow 226017', href: 'https://maps.google.com' },
];

const quickLinks = [
  { text: 'About Us', href: 'http://www.drartihospital.com' }
];
export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="footer-gradient border-t border-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">Dr. Arti Hospital</h3>
              <p className="text-gray-600 mb-6">Providing quality healthcare since 2014.</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group transition-colors hover:bg-[#FF0099]"
                  >
                    <social.icon className="w-5 h-5 text-[#FF0099] group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-600 hover:text-[#FF0099] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="grid gap-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-gray-600 hover:text-[#FF0099] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.text}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">Subscribe to our newsletter for updates and health tips.</p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0099]/20 transition-all"
                  />
                  <button className="mt-3 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF0099] to-[#7B00FF] text-white font-medium hover:opacity-90 transition-opacity">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <motion.p
            className="text-center text-sm text-gray-600 flex items-center justify-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Made with <Heart className="w-4 h-4 text-[#FF0099]" /> by Dr. Arti Hospital © {new Date().getFullYear()}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}