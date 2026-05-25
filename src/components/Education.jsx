import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Lightbulb } from 'lucide-react'
import { education } from '../data/portfolioData'

const cardVariant = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="section-tag">Academic background</p>
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-2xl mx-auto space-y-5"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              className="glass-card p-8 flex gap-6 hover:border-cyan-500/30 transition-all duration-300"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <GraduationCap size={24} className="text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-cyan-400 font-semibold mb-2">{edu.institution}</p>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-3">
                  <Calendar size={13} />
                  {edu.duration}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Self-learning card */}
          <motion.div
            variants={cardVariant}
            className="glass-card p-6 bg-gradient-to-br from-purple-500/[0.06] to-blue-500/[0.06] border-purple-500/20"
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Lightbulb size={18} className="text-purple-400" />
              </div>
              <h4 className="text-white font-semibold">Self-Taught Transition into Tech</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transitioned from Aircraft Maintenance Engineering into software development through
              self-learning and real-world project work. Built professional expertise in Java, Spring
              Boot, and backend architecture through hands-on industry experience — proving that
              discipline and the right mindset matter more than any degree path.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
