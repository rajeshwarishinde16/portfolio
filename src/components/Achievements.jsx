import { motion } from 'framer-motion'
import { Award, Code, Zap, CheckCircle } from 'lucide-react'

const Achievements = () => {

  const achievements = [
    {
      icon: Award,
      title: 'MCA Student',
      description: 'Currently pursuing Master of Computer Applications with strong academic performance',
    },
    {
      icon: Code,
      title: 'Java Full Stack Certified',
      description: 'Certified in Java Full Stack Development with hands-on project experience',
    },
    {
      icon: Zap,
      title: 'Strong DSA Foundation',
      description: 'Solid understanding of Data Structures and Algorithms for efficient problem-solving',
    },
    {
      icon: CheckCircle,
      title: 'Clean Code Practices',
      description: 'Follow industry best practices for writing maintainable and scalable code',
    },
    {
      icon: Award,
      title: 'Responsive Web Design',
      description: 'Expert in creating mobile-first, responsive designs that work on all devices',
    },
    {
      icon: Code,
      title: 'REST API Development',
      description: 'Experienced in building robust and secure RESTful APIs',
    },
  ]

  return (
    <section className="py-20 bg-primary-beige/30 dark:bg-primary-black/50">
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
            My <span className="gradient-text">Achievements</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-primary-gold mx-auto mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <achievement.icon className="w-6 h-6 text-primary-gold" />
                </div>
                <div>
                  <h3 className="font-bold font-playfair mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
