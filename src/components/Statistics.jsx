import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Statistics = () => {
  const [inView, setInView] = useState(false)

  const stats = [
    { value: 10, suffix: '+', label: 'Projects Completed' },
    { value: 15, suffix: '+', label: 'Technologies Mastered' },
    { value: 100, suffix: '%', label: 'Responsive Designs' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' },
  ]

  const StatItem = ({ value, suffix, label, delay, inView }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (inView) {
        let start = 0
        const end = value
        const duration = 2000
        const incrementTime = duration / end
        const timer = setInterval(() => {
          start += 1
          setCount(start)
          if (start >= end) clearInterval(timer)
        }, incrementTime)
        return () => clearInterval(timer)
      }
    }, [inView, value])

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay }}
        whileHover={{ scale: 1.1 }}
        className="text-center"
      >
        <div className="text-5xl sm:text-6xl font-bold gradient-text mb-2">
          {count}
          {suffix}
        </div>
        <p className="text-gray-600 dark:text-gray-300 font-medium">{label}</p>
      </motion.div>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary-gold/10 to-primary-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setInView(true)}
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
            My <span className="gradient-text">Statistics</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-primary-gold mx-auto mb-12"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={0.5 + index * 0.1}
                inView={inView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics
