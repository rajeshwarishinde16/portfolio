import { motion } from 'framer-motion'
import { ExternalLink, Github, CheckCircle } from 'lucide-react'

const Projects = () => {

  const projects = [
    {
      title: 'Retail Billing Management System',
      description: 'Complete retail management solution with advanced features for modern businesses',
      features: [
        'JWT Authentication',
        'Inventory Management',
        'Billing System',
        'Purchase Management',
        'Sales Dashboard',
        'AI Voice Billing',
        'Business Wallet',
        'Responsive Admin Dashboard',
      ],
      tech: ['Spring Boot', 'Java', 'MySQL', 'React'],
      image: '🏪',
    },
    {
      title: 'ShubhVivah',
      description: 'Comprehensive matrimonial platform connecting families and vendors',
      features: [
        'Matrimonial Platform',
        'Vendor Management',
        'Wedding Planning',
        'Matchmaking Algorithm',
        'Secure Authentication',
        'KYC Verification',
      ],
      tech: ['Spring Boot', 'React', 'MySQL'],
      image: '💒',
    },
    {
      title: 'Responsive Cafe Website',
      description: 'Elegant and modern website for cafes with smooth user experience',
      features: [
        'Elegant UI Design',
        'Interactive Menu',
        'Photo Gallery',
        'Contact Form',
        'Responsive Design',
        'Smooth Animations',
      ],
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: '☕',
    },
  ]

  return (
    <section id="projects" className="py-20">
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-primary-gold mx-auto mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="glass rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-playfair mb-3 group-hover:text-primary-gold transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1 text-xs px-2 py-1 bg-primary-gold/10 text-primary-gold rounded-full"
                        >
                          <CheckCircle size={12} />
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 4 && (
                        <span className="text-xs text-gray-500">
                          +{project.features.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-gold text-white rounded-lg hover:bg-primary-goldLight transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary-gold text-primary-gold rounded-lg hover:bg-primary-gold hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
