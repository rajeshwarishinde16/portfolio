import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const Testimonials = () => {

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'CEO, TechStart India',
      content: 'Rajeshwari delivered an exceptional e-commerce platform for our startup. Her attention to detail and problem-solving skills are outstanding. The project was completed on time and exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Product Manager, InnovateTech',
      content: 'Working with Rajeshwari was a pleasure. She understood our requirements perfectly and built a robust backend system. Her code quality and documentation are top-notch. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Sneha Kulkarni',
      role: 'Founder, Cafe Bliss',
      content: 'The website Rajeshwari created for our cafe is beautiful and functional. She incorporated all our ideas and added valuable suggestions. Our customers love the new design!',
      rating: 5,
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
            Client <span className="gradient-text">Testimonials</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-primary-gold mx-auto mb-12"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-gold/30" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-gold text-primary-gold" />
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <h4 className="font-bold font-playfair">{testimonial.name}</h4>
                  <p className="text-sm text-primary-gold">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
