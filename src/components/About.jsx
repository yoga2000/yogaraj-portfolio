import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'
import { personalInfo, summary } from '../data/portfolioData'

// Shared scroll-reveal variants
const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const stats = [
  { value: '1.8+', label: 'Years Experience' },
  { value: '3+', label: 'Projects Shipped' },
  { value: '2', label: 'Companies' },
]

const strengths = [
  'Design and build scalable REST APIs',
  'Architect healthcare-grade data backends',
  'Integrate AI / LLM into backend systems',
  'Implement secure JWT + RBAC auth flows',
  'Write advanced MongoDB aggregation pipelines',
  'Build clean, production-ready Java code',
]

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* subtle glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-600/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        {/* Section header */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="section-tag">Get to know me</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* ── Left column ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-5"
          >
            {/* Bio card */}
            <motion.div variants={reveal} className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Hi, I'm <span className="gradient-text">Yogaraj H</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">{summary}</p>
              <p className="text-gray-400 leading-relaxed">
                My background in Aircraft Maintenance Engineering instilled a mindset of precision
                and systematic thinking — values I now bring to building fault-tolerant,
                well-structured software for the healthcare technology space.
              </p>
            </motion.div>

            {/* Contact quick-links */}
            <motion.div variants={reveal} className="glass-card p-6">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">
                Contact Info
              </p>
              <div className="space-y-3">
                {[
                  { icon: Mail,  text: personalInfo.email,    href: `mailto:${personalInfo.email}` },
                  { icon: Phone, text: personalInfo.phone,    href: null },
                  { icon: MapPin,text: personalInfo.location, href: null },
                ].map(({ icon: Icon, text, href }) =>
                  href ? (
                    <a
                      key={text}
                      href={href}
                      className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      <Icon size={15} className="text-cyan-400 shrink-0" />
                      <span className="text-sm">{text}</span>
                    </a>
                  ) : (
                    <div key={text} className="flex items-center gap-3 text-gray-400">
                      <Icon size={15} className="text-cyan-400 shrink-0" />
                      <span className="text-sm">{text}</span>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right column ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-5"
          >
            {/* Stats */}
            <motion.div variants={reveal} className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  className="glass-card p-5 text-center hover:border-cyan-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.04, y: -3 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                >
                  <div className="text-3xl font-black gradient-text mb-1">{value}</div>
                  <div className="text-gray-500 text-xs leading-tight">{label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Strengths */}
            <motion.div variants={reveal} className="glass-card p-6">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-5">
                What I Do
              </p>
              <ul className="space-y-2.5">
                {strengths.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Domain badge */}
            <motion.div
              variants={reveal}
              className="glass-card p-5 bg-gradient-to-br from-cyan-500/[0.06] to-blue-500/[0.06] border-cyan-500/20"
            >
              <p className="text-cyan-400 font-semibold text-sm mb-1">Healthcare Domain Expertise</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Hands-on experience with HIPAA-compliant systems, CCM/PCM/BHI/HTR clinical programs,
                and revenue cycle analytics used by clinical operations teams daily.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
