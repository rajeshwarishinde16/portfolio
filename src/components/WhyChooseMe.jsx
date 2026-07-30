import { motion } from 'framer-motion'
import { Check, Code, Smartphone, Clock, MessageCircle, DollarSign, Palette } from 'lucide-react'

const WhyChooseMe = () => {

  const reasons = [
    {
      icon: Code,
      title: 'Clean and Maintainable Code',
      description: 'Writing clean, well-documented code that is easy to maintain and scale',
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive Websites',
      description: 'Ensuring your website looks perfect on all devices, from mobile to desktop',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Committed to delivering projects on time without compromising quality',
    },
    {
      icon: MessageCircle,
      title: 'Professional Communication',
      description: 'Clear and timely communication throughout the project lifecycle',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates with transparent pricing and no hidden costs',
    },
    {
      icon: Palette,
      title: 'Modern UI Design',
      description: 'Creating beautiful, intuitive interfaces that users love',
    },
  ]

  return (
    <section className="py-20">
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
            Why <span className="gradient-text">Choose Me</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-primary-gold mx-auto mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
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
                  <reason.icon className="w-8 h-8 text-primary-gold" />
                </motion.div>
                
                <h3 className="text-xl font-bold font-playfair mb-3">{reason.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseMe
