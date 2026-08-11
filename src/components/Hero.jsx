import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-white dark:bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-gray-100 via-transparent to-gray-200 dark:from-gray-900 dark:via-transparent dark:to-gray-800 opacity-50"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-gray-100 via-transparent to-gray-200 dark:from-gray-900 dark:via-transparent dark:to-gray-800 opacity-50"
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-gray-200 dark:border-gray-800 rounded-full"
            style={{
              width: 100 + Math.random() * 200,
              height: 100 + Math.random() * 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium mb-6 tracking-widest uppercase bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-600 bg-clip-text text-transparent"
            >
              Full Stack Developer
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-black via-gray-700 to-black dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                Rajeshwari Shinde
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl leading-relaxed"
            >
              I design and build digital products, brands and websites for companies ready to move beyond the ordinary.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 font-medium flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Get in touch
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 font-medium"
                >
                  View work
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300 font-medium flex items-center gap-2"
                >
                  <Download size={18} />
                  Resume
                </a>
              </motion.div>
            </motion.div>
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
          className="w-6 h-10 border-2 border-black dark:border-white rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
