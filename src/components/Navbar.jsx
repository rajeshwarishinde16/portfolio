import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Link } from 'react-scroll'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl py-4 border-b border-gray-200 dark:border-gray-800'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="text-xl sm:text-2xl font-bold"
          >
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              Rajeshwari Shinde
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400 transition-colors cursor-pointer relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400 transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium text-center"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
