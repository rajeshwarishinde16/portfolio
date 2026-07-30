import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {

  const experience = [
    {
      title: 'Associate Software Engineer',
      company: 'ThynkTech India',
      duration: '6 Months Internship',
      location: 'Pune, Maharashtra',
      description: [
        'Full Stack Development using Java and Spring Boot',
        'Designed and implemented REST APIs',
        'Database design and optimization',
        'Collaborated with cross-functional teams',
        'Built responsive frontend with React',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
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
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-primary-gold mx-auto mb-12"
          />

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass p-8 rounded-2xl relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-gold rounded-l-2xl" />
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-7 h-7 text-primary-gold" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-playfair mb-2">{exp.title}</h3>
                    <p className="text-primary-gold font-semibold mb-2">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.description.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300">{item}</p>
                    </motion.div>
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

export default Experience
