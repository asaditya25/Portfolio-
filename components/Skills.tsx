'use client'

import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CircleStackIcon,
  CloudIcon 
} from '@heroicons/react/24/outline'
import React from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'React.js / Next.js',
      'TypeScript / JavaScript',
      'HTML5 / CSS3 / SASS',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    icon: ServerIcon,
    color: 'from-green-500 to-emerald-500',
    skills: [
      'Node.js / Express',
    ],
  },
  {
    title: 'Database',
    icon: CircleStackIcon,
    color: 'from-purple-500 to-pink-500',
    skills: [
      'PostgreSQL / MySQL',
      'MongoDB',
      'Firebase',
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: CloudIcon,
    color: 'from-orange-500 to-red-500',
    skills: [
      'Docker / Kubernetes',
      'AWS / Azure/',
      'CI/CD Pipelines',
      'Git / GitHub Actions',
    ],
  },
]

const Skills = React.memo(function Skills() {
  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight font-sans">
            Technical Skills
          </h2>
          <p className="text-xl md:text-2xl text-secondary-200 max-w-2xl mx-auto font-sans">
            Here are the technologies and tools I work with to build amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-primary-900 rounded-2xl p-8 shadow-xl border border-primary-800/30 hover:shadow-2xl transition-shadow duration-300 text-center group"
            >
              {/* Icon */}
              <motion.div
                className={`w-14 h-14 mx-auto mb-6 rounded-lg bg-gradient-to-r ${category.color} p-3 text-white shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <category.icon className="w-full h-full" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-primary-400 transition-colors duration-200 font-sans">
                {category.title}
              </h3>

              {/* Skills List */}
              <ul className="space-y-3 text-left">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="text-secondary-200 font-medium py-2 px-3 rounded-lg hover:bg-primary-900/40 transition-colors duration-200 border-l-2 border-transparent hover:border-primary-400 font-sans"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills or Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-8">
            Always Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Machine Learning',
              'GraphQL',
              'Web3',
              'Mobile Development',
              'Data Science',
              'Microservices',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 font-medium rounded-full border border-primary-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default Skills
