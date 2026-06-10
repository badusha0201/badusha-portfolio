'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const roles = ['Software Developer', 'UI/UX Designer', 'AI Enthusiast', 'Data Scientist', 'Business Strategist'];

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image Placeholder */}
        <motion.div
          className="mb-8 flex justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full glassmorphism p-1 border-2 border-blue-500/50">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
              👨‍💻
            </div>
          </div>
        </motion.div>

        <motion.div className="relative mx-auto mb-12 h-72 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl">
          <Image src="/sections/hero.svg" alt="Hero illustration" fill className="object-cover" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="gradient-text">A. Badusha</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          className="text-xl md:text-3xl mb-8 h-12 md:h-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="gradient-text-purple">
            {displayedText}
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="ml-2"
            >
              |
            </motion.span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Crafting premium digital experiences with cutting-edge technology, innovative design, and strategic thinking. Let&apos;s build something extraordinary together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center flex-wrap mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaChevronDown size={24} className="text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
