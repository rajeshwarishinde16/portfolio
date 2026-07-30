import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Layout, Server, Cpu, Globe, Download, ArrowRight } from 'lucide-react'
import { Link } from 'react-scroll'

const Hero = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = [
    'Java Developer',
    'React Developer',
    'Spring Boot Developer',
    'Web Designer',
    'Freelancer'
  ]

  useEffect(() => {
    const currentRole = roles[index]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1))
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setText(currentRole.substring(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index])

  const floatingIcons = [
    { icon: Code, delay: 0, position: 'top-20 left-10' },
    { icon: Database, delay: 1, position: 'top-40 right-20' },
    { icon: Layout, delay: 2, position: 'bottom-40 left-20' },
    { icon: Server, delay: 3, position: 'bottom-20 right-10' },
    { icon: Cpu, delay: 4, position: 'top-60 left-1/4' },
    { icon: Globe, delay: 5, position: 'bottom-60 right-1/4' },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.position} text-primary-gold/20`}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6,
              delay: item.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <item.icon size={60} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-gold font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-playfair mb-4"
            >
              Rajeshwari Shinde
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4"
            >
              <span className="gradient-text">{text}</span>
              <span className="animate-pulse">|</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Building Fast, Scalable & Beautiful Web Applications.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-8 py-3 bg-primary-gold text-white rounded-full hover:bg-primary-goldLight transition-all duration-300 font-medium flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Hire Me
                <ArrowRight size={18} />
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="px-8 py-3 border-2 border-primary-gold text-primary-gold rounded-full hover:bg-primary-gold hover:text-white transition-all duration-300 font-medium flex items-center gap-2"
              >
                View Projects
              </Link>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 glass rounded-full hover:bg-primary-gold/20 transition-all duration-300 font-medium flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full border-2 border-primary-gold/30"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-4 rounded-full border-2 border-primary-gold/20"
              />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center glass">
                <div className="text-center">
                  <div className="text-6xl sm:text-8xl font-bold font-playfair gradient-text mb-2">
                    RS
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-gold rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
