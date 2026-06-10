'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/utils/animations';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: '#', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/10 py-12 px-4 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold gradient-text mb-4">A. Badusha</h3>
            <p className="text-gray-400 text-sm">
              Building premium digital experiences with innovation and creativity.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-white/10 rounded-lg hover:bg-blue-500/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <motion.div
            className="text-center text-gray-400 text-sm"
            variants={itemVariants}
          >
            <p className="mb-2">
              © {currentYear} A. Badusha. All rights reserved.
            </p>
            <p>
              Designed & developed with <span className="text-red-400">❤️</span> by{' '}
              <span className="text-blue-400 font-semibold">A. Badusha</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
