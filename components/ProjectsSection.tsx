'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/utils/animations';
import { projectsData } from '@/utils/constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
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
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Showcase of innovative projects combining technology, design, and user experience
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="glassmorphism rounded-2xl overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 gradient-text">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={18} />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={18} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
