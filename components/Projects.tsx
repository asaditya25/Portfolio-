'use client'

import { motion } from 'framer-motion'
import { 
  GlobeAltIcon, 
  DevicePhoneMobileIcon, 
  CodeBracketIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  CloudIcon 
} from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: 'Advocate -Website',
    description: 'A responsive Advocate Website using React, Node.js, and MongoDB with real-time chat, appointment booking',
    icon: GlobeAltIcon,
    technologies: ['React', 'Node.js', 'MongoDB'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Music Store analysis using SQL',
    description: 'Data analysis project using SQL to extract insights from a music store database',
    icon: DevicePhoneMobileIcon,
    technologies: ['SQL', 'PostgreSQL', 'Data Analysis'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Drowsiness Detection System',
    description: 'Real-time drowsiness detection system using computer vision and machine learning',
    icon: CodeBracketIcon,
    technologies: ['Python', 'OpenCV', 'DLiB'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Diwali Sales Analysis',
    description: 'A comprehensive tool for analyzing sales data during the Diwali season using advanced data visualization techniques.',
    icon: ChartBarIcon,
    technologies: ['Python', 'Pandas', 'Matplotlip'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my projects and skills.',
    icon: ShoppingCartIcon,
    technologies: ['Next.js', 'TypeScript', 'React'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 6,
    title: 'Cloud Infrastructure',
    description: 'Automated deployment pipeline and cloud architecture',
    icon: CloudIcon,
    technologies: ['AWS', 'Docker', 'Terraform'],
    color: 'from-teal-500 to-green-500',
  },
]

import React from 'react'

const Projects = React.memo(function Projects() {
  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight font-sans">
            My Projects
          </h2>
          <p className="text-xl md:text-2xl text-secondary-200 max-w-2xl mx-auto font-sans">
            I love to create things, and I&apos;m always working on something new! Here are some of my favorite projects.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.slice(0, 5).map((project) => (
            <motion.div
              key={project.id}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-primary-900 rounded-2xl p-8 shadow-xl border border-primary-800/30 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-start h-full group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <div className={`w-12 h-12 mb-4 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                <project.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200 font-sans">{project.title}</h3>
              <p className="text-secondary-200 mb-4 flex-1 font-sans leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span key={tech} className="inline-block bg-primary-500/20 text-primary-200 text-xs md:text-sm font-semibold px-3 py-1 rounded-full font-sans">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/asaditya25"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary text-lg px-8 py-4 inline-flex items-center gap-3 font-sans"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
})

export default Projects
