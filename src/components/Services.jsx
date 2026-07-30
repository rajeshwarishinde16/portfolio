import { motion } from 'framer-motion'
import { Monitor, Coffee, Server, GraduationCap, Bug, RefreshCw } from 'lucide-react'

const Services = () => {

  const services = [
    {
      icon: Monitor,
      title: 'Responsive Website Development',
      description: 'Modern, mobile-first websites using HTML, CSS, JavaScript, and React',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      icon: Coffee,
      title: 'Java Application Development',
      description: 'Robust desktop and enterprise applications using Core Java and OOP principles',
      tech: ['Core Java', 'OOP', 'Swing', 'Desktop Apps'],
    },
    {
      icon: Server,
      title: 'Spring Boot Backend Development',
      description: 'Scalable REST APIs with authentication, JWT, and database integration',
      tech: ['Spring Boot', 'REST APIs', 'JWT', 'MySQL'],
    },
    {
      icon: GraduationCap,
      title: 'College Project Development',
      description: 'Complete final year projects for MCA, BCA, and other computer science programs',
      tech: ['Final Year', 'MCA', 'BCA', 'Complete Solutions'],
    },
    {
      icon: Bug,
      title: 'Bug Fixing',
      description: 'Debugging and fixing issues in Java, React, HTML, CSS, and JavaScript applications',
      tech: ['Java', 'React', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      description: 'Modernizing existing websites with improved UI, mobile optimization, and performance',
      tech: ['Modern UI', 'Mobile First', 'Performance', 'UX'],
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold font-playfair text-center mb-4"
          >
            My <span className="gradient-text">Services</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-primary-gold mx-auto mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-primary-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-gold/20 transition-colors"
                >
                  <service.icon className="w-8 h-8 text-primary-gold" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-4 font-playfair">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-gold/10 text-primary-gold text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
