'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/utils/animations';
import { servicesData } from '@/utils/constants';

export default function ServicesSection() {
  return (
    <section
      id="services"
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
          Services
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Comprehensive solutions tailored to your business needs
        </motion.p>

        <motion.div className="relative h-80 mb-12 rounded-3xl overflow-hidden shadow-2xl" variants={itemVariants}>
          <Image src="/sections/services.svg" alt="Services illustration" fill className="object-cover" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="glassmorphism p-8 rounded-2xl text-center"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 30px 60px rgba(59, 130, 246, 0.3)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)'
              }}
            >
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
