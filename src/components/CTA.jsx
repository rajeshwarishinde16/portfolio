import { motion } from 'framer-motion'
import { ArrowRight, Send } from 'lucide-react'
import { Link } from 'react-scroll'

const CTA = () => {

  return (
    <section className="py-20 bg-primary-beige/30 dark:bg-primary-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair mb-6"
          >
            Let's Build Something <span className="gradient-text">Amazing</span> Together
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Ready to bring your ideas to life? Let's collaborate and create something extraordinary.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-4 bg-primary-gold text-white rounded-full hover:bg-primary-goldLight transition-all duration-300 font-medium flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Hire Me
              <ArrowRight size={20} />
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-4 border-2 border-primary-gold text-primary-gold rounded-full hover:bg-primary-gold hover:text-white transition-all duration-300 font-medium flex items-center gap-2"
            >
              Send Message
              <Send size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
