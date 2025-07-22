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
    title: 'Web Application',
    description: 'Full-stack web application with modern technologies',
    icon: GlobeAltIcon,
    technologies: ['React', 'Node.js', 'MongoDB'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Mobile Application',
    description: 'Cross-platform mobile app solving real-world problems',
    icon: DevicePhoneMobileIcon,
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'REST API',
    description: 'Scalable backend API with comprehensive documentation',
    icon: CodeBracketIcon,
    technologies: ['Python', 'FastAPI', 'PostgreSQL'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for data visualization and insights',
    icon: ChartBarIcon,
    technologies: ['Python', 'Pandas', 'D3.js'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'E-commerce Platform',
    description: 'Complete online shopping solution with payment integration',
    icon: ShoppingCartIcon,
    technologies: ['Next.js', 'Stripe', 'Prisma'],
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

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            I love to create things, and I'm always working on something new! Here are some of my favorite projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="card p-8 text-center group cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${project.color} p-4 text-white`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <project.icon className="w-full h-full" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 justify-center">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                  >
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
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
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
}
