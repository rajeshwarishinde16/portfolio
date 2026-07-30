import { motion } from 'framer-motion'
import { Code2, Database, Layout, Server, Zap, Users } from 'lucide-react'

const About = () => {

  const highlights = [
    { icon: Code2, text: 'MCA Student' },
    { icon: Zap, text: 'Problem Solver' },
    { icon: Layout, text: 'UI/UX Enthusiast' },
    { icon: Server, text: 'Backend Developer' },
    { icon: Database, text: 'Database Designer' },
    { icon: Users, text: 'Team Player' },
  ]

  return (
    <section id="about" className="py-20 bg-primary-beige/30 dark:bg-primary-black/50">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-primary-gold mx-auto mb-12"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate <span className="font-semibold gradient-text">Full Stack Java Developer</span> and MCA student based in Pune, India. With a strong foundation in computer science and a love for creating elegant solutions, I specialize in building modern, responsive web applications that solve real-world business problems.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My expertise spans across <span className="font-semibold">Java, Spring Boot, React</span>, and database design. I believe in writing clean, maintainable code and creating intuitive user experiences. Whether it's developing complex backend systems or crafting beautiful frontend interfaces, I bring dedication and attention to detail to every project.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm constantly learning and staying updated with the latest technologies to deliver cutting-edge solutions. My goal is to help businesses grow by building scalable, efficient, and user-friendly applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
                >
                  <item.icon className="w-10 h-10 text-primary-gold mb-4" />
                  <p className="font-medium">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
