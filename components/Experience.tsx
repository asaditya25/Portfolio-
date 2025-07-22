'use client'

import { motion } from 'framer-motion'

const timeline = [
  {
    id: 1,
    title: 'Senior Software Developer',
    company: 'Tech Innovation Inc.',
    period: '2022 - Present',
    description: 'Led development of scalable web applications serving 100K+ users. Mentored junior developers and implemented best practices.',
    type: 'work',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Built and maintained multiple client projects using modern JavaScript frameworks and cloud technologies.',
    type: 'work',
  },
  {
    id: 3,
    title: 'Software Developer',
    company: 'StartupXYZ',
    period: '2019 - 2020',
    description: 'Developed MVP products and helped scale the platform from 0 to 10K users using React and Node.js.',
    type: 'work',
  },
  {
    id: 4,
    title: 'Bachelor\'s in Computer Science',
    company: 'University of Technology',
    period: '2015 - 2019',
    description: 'Graduated with honors. Focused on software engineering, algorithms, and data structures. Active in coding competitions.',
    type: 'education',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-secondary-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and educational background that shaped me as a developer.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-primary-200" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline marker */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <motion.div
                    className="card p-6"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-3 h-3 rounded-full ${
                        item.type === 'work' ? 'bg-green-500' : 'bg-blue-500'
                      }`} />
                      <span className={`text-sm font-medium ${
                        item.type === 'work' ? 'text-green-600' : 'text-blue-600'
                      }`}>
                        {item.type === 'work' ? 'Work Experience' : 'Education'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-primary-600 font-semibold mb-3">
                      {item.company} • {item.period}
                    </p>
                    
                    <p className="text-secondary-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-2/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
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
