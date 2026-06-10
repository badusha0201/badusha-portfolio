'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/utils/animations';
import { experienceData } from '@/utils/constants';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 gradient-text text-center"
          variants={itemVariants}
        >
          Experience & Education
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          A timeline of professional growth and educational achievements
        </motion.p>

        <motion.div className="relative h-80 mb-12 rounded-3xl overflow-hidden shadow-2xl" variants={itemVariants}>
          <Image src="/sections/experience.svg" alt="Experience illustration" fill className="object-cover" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex gap-8 mb-8"
              variants={itemVariants}
            >
              {/* Timeline Line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-20 bg-gradient-to-b from-blue-500 to-transparent" />
              )}

              {/* Icon */}
              <motion.div
                className="flex-shrink-0 text-4xl mt-2"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {item.icon}
              </motion.div>

              {/* Content Card */}
              <motion.div
                className="glassmorphism p-6 rounded-xl flex-1"
                whileHover={{ x: 10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-blue-400">{item.company}</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
