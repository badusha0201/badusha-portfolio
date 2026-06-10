'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { containerVariants, itemVariants } from '@/utils/animations';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
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
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Have a project in mind? Let&apos;s collaborate and create something amazing together.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
        >
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl" variants={itemVariants}>
              <Image src="/sections/contact.svg" alt="Contact illustration" fill className="object-cover" />
            </motion.div>
            {[
              { icon: FaEnvelope, label: "Email", value: "saabikbadusha@gmail.com" },
              { icon: FaPhone, label: "Phone", value: "8925587483" },
              { icon: FaMapMarkerAlt, label: "Location", value: "Coonoor, The Nilgiris" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <div className="mt-1">
                  <item.icon className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <p className="text-lg font-semibold">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-sm text-gray-400 mb-4">Follow me on</p>
              <div className="flex gap-4">
                {[
                  { icon: FaGithub, label: 'GitHub', href: '#' },
                  { icon: FaLinkedin, label: 'LinkedIn', href: '#' },
                  { icon: FaTwitter, label: 'Twitter', href: '#' },
                  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/sha______02' },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    className="p-3 bg-white/10 rounded-lg hover:bg-blue-500/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <input
                {...register('name', { required: true })}
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                {...register('email', { required: true })}
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                {...register('subject', { required: true })}
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                {...register('message', { required: true })}
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              Send Message
            </motion.button>

            {isSubmitted && (
              <motion.p
                className="text-green-400 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✓ Message sent successfully!
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}
