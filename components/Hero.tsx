'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <section id="top" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-50 via-white to-primary-50 pt-16 lg:pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hey, I'm{' '}
              <span className="gradient-text">
                ADITYA SINGH
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-secondary-600 mb-8 lg:mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I'm a passionate software developer who loves creating innovative solutions and bringing ideas to life through code.
              Here, you can explore my journey and the projects I've built with{' '}
              <span className="text-red-500 text-2xl">❤️</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="btn btn-primary text-base lg:text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                className="btn btn-secondary text-base lg:text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end w-full max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto">
                {/* Animated background blur */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-2xl opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Profile image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/img/profile.jpg"
                    alt="ADITYA SINGH - Software Developer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full shadow-lg"
                  animate={{
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full shadow-lg"
                  animate={{
                    y: [10, -10, 10],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ...removed scroll to explore indicator... */}
      </div>
    </section>
  )
}
