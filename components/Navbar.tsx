'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-primary-900/90 backdrop-blur-xl shadow-2xl border-b border-primary-800/30'
          : 'bg-gradient-to-br from-gray-900/60 via-gray-800/60 to-primary-900/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#top')
            }}
            className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent tracking-tight drop-shadow-lg hover:scale-105 transition-transform duration-200 font-sans"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            AS
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="text-base lg:text-lg font-semibold text-white/90 hover:text-primary-400 px-3 py-2 rounded-lg transition-all duration-200 relative group focus:outline-none focus:ring-2 focus:ring-primary-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 w-6 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200" />
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:text-primary-400 hover:bg-primary-900/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-lg"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="md:hidden bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-primary-900/95 backdrop-blur-xl border-t border-primary-800/30 shadow-2xl rounded-b-2xl"
            >
              <div className="py-4 px-4 space-y-2">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      setTimeout(() => scrollToSection(item.href), 250);
                    }}
                    className="block px-4 py-4 text-lg font-semibold text-white/90 hover:text-primary-400 hover:bg-primary-900/40 rounded-xl transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
