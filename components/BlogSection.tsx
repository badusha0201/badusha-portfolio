'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { containerVariants, itemVariants } from '@/utils/animations';
import { blogData } from '@/utils/constants';

const categories = ['All', 'React', 'AI', 'Design'];

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogData.filter(
    (post) => selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <section
      id="blog"
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
          Latest Articles
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Insights on web development, AI, and design
        </motion.p>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              className="glassmorphism rounded-2xl overflow-hidden cursor-pointer group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{post.excerpt}</p>
                <motion.a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold"
                  whileHover={{ x: 5 }}
                >
                  Read More →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
