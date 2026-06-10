'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/utils/animations';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Column - Image/Visual */}
        <motion.div variants={itemVariants} className="relative">
          <div className="glassmorphism p-4 rounded-3xl overflow-hidden">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/sections/about.svg" alt="About illustration" fill className="object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div variants={containerVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 mb-4"
            variants={itemVariants}
          >
            I&apos;m a passionate software developer and designer dedicated to creating innovative digital solutions that combine technical excellence with exceptional user experience.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-6"
            variants={itemVariants}
          >
            With a strong foundation in web development, AI/ML, and UI/UX design, I help businesses and individuals transform their ideas into powerful digital products that drive real impact.
          </motion.p>


          {/* Key Points */}
          <motion.div className="space-y-3" variants={containerVariants}>
            {[
              "Building scalable web applications with React & Next.js",
              "Designing intuitive user interfaces with Figma",
              "Implementing AI solutions for business problems",
              "Passionate about innovation and continuous learning",
            ].map((point, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <span className="text-blue-400 mt-1">✓</span>
                <span className="text-gray-300">{point}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
