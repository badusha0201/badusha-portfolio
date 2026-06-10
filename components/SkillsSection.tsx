'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/utils/animations';
import { skillsData } from '@/utils/constants';

export default function SkillsSection() {
  return (
    <section
      id="skills"
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
          Skills & Expertise
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Comprehensive skill set in modern web development, design, and emerging technologies
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className="glassmorphism p-6 rounded-xl"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <span className="text-blue-400 font-bold">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
