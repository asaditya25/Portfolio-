'use client'

import { motion } from 'framer-motion'

const timeline = [
 
  {
    id: 4,
    title: 'Bachelor\'s in Computer Science',
    company: 'Bachelor of Engineering - CSE',
    period: '2021 - 2025',
    description: 'Graduated with honors. Focused on software engineering, algorithms, and data structures. Active in coding competitions.',
    type: 'education',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight font-sans">
            Experience & Education
          </h2>
          <p className="text-xl md:text-2xl text-secondary-200 max-w-2xl mx-auto font-sans">
            My professional journey and educational background that shaped me as a developer.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800 via-gray-900 to-primary-900 rounded-2xl p-8 shadow-xl border border-primary-800/30"
          >
            <h3 className="text-2xl font-bold text-white mb-2 font-sans">
              {timeline[0].title}
            </h3>
            <p className="text-primary-400 font-semibold mb-3 font-sans">
              {timeline[0].company} • {timeline[0].period}
            </p>
            <p className="text-secondary-200 leading-relaxed font-sans">
              {timeline[0].description}
            </p>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <motion.a
            href="/resume.pdf"
            download="Aditya_Singh_Resume.pdf"
            className="btn btn-primary text-lg px-8 py-4 inline-flex items-center gap-3 shadow-lg hover:shadow-primary-500/30 transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}