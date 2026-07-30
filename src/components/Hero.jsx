import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Code, Database, Layout, Server, Cpu, Globe, Download, ArrowRight, Box } from 'lucide-react'
import { Link } from 'react-scroll'

const Hero = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const cardRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10])
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10])

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

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      mouseX.set(x)
      mouseY.set(y)
    }
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-[#f8f6f3] via-white to-[#6366f1]/5 dark:from-black dark:via-gray-900 dark:to-[#6366f1]/5">
      {/* Animated 3D Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #6366f1 1px, transparent 1px),
            linear-gradient(to bottom, #6366f1 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
        }} />
      </div>

      {/* Floating 3D Cubes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              rotateX: [0, 360],
              rotateY: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Box className="text-[#6366f1]/20" size={30 + Math.random() * 20} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
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
              className="text-[#6366f1] font-medium mb-4"
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
              <span className="animate-pulse text-[#6366f1]">|</span>
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#818cf8] text-white rounded-full hover:shadow-2xl hover:shadow-[#6366f1]/30 transition-all duration-300 font-medium flex items-center gap-2"
                >
                  Hire Me
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="px-8 py-3 border-2 border-[#6366f1] text-[#6366f1] rounded-full hover:bg-[#6366f1] hover:text-white transition-all duration-300 font-medium flex items-center gap-2"
                >
                  View Projects
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-3 glass rounded-full hover:bg-[#6366f1]/10 transition-all duration-300 font-medium flex items-center gap-2"
                >
                  <Download size={18} />
                  Resume
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 3D Interactive Card */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
            style={{
              rotateX: useSpring(rotateX),
              rotateY: useSpring(rotateY),
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto perspective-1000">
              {/* Outer 3D Ring */}
              <motion.div
                animate={{ rotateZ: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-[#6366f1]/20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full"
                    style={{
                      transform: `rotateZ(${i * 30}deg) translateZ(20px)`,
                      border: '1px solid rgba(99, 102, 241, 0.1)',
                    }}
                  />
                ))}
              </motion.div>

              {/* Middle 3D Ring */}
              <motion.div
                animate={{ rotateZ: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-[#6366f1]/30"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full"
                    style={{
                      transform: `rotateZ(${i * 45}deg) translateZ(15px)`,
                      border: '1px solid rgba(99, 102, 241, 0.15)',
                    }}
                  />
                ))}
              </motion.div>

              {/* Inner 3D Card */}
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-16 rounded-2xl bg-gradient-to-br from-[#6366f1]/20 via-[#6366f1]/10 to-[#6366f1]/5 flex items-center justify-center glass backdrop-blur-xl shadow-2xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotateZ: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-6xl sm:text-8xl font-bold font-playfair gradient-text mb-2"
                  >
                    RS
                  </motion.div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Full Stack Developer
                  </p>
                </div>
              </motion.div>
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
          className="w-6 h-10 border-2 border-[#6366f1] rounded-full flex justify-center pt-2 glass"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#6366f1] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
