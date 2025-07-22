import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedWork from '@/components/FeaturedWork'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import dynamic from 'next/dynamic'

const Experience = dynamic(() => import('@/components/Experience'))
const Contact = dynamic(() => import('@/components/Contact'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedWork />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
