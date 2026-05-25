import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { experience } from '../data/portfolioData'

const cardVariant = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      {/* glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="section-tag">My journey</p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/20 to-transparent hidden sm:block" />

          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="space-y-10"
          >
            {experience.map((job, idx) => (
              <motion.div key={idx} variants={cardVariant} className="relative sm:pl-16">
                {/* Timeline icon */}
                <div className="hidden sm:flex absolute left-0 top-6 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 items-center justify-center shadow-lg shadow-cyan-500/30 shrink-0">
                  <Briefcase size={17} className="text-white" />
                </div>

                <div className="glass-card p-8 hover:border-white/20 transition-all duration-300">
                  {/* Job header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                    <div>
                      <span
                        className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-2 ${
                          job.type === 'Full-time'
                            ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                            : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                        }`}
                      >
                        {job.type}
                      </span>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <p className="text-cyan-400 font-semibold">{job.company}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-sm text-gray-500 sm:text-right shrink-0">
                      <span className="flex items-center gap-1.5 sm:justify-end">
                        <Calendar size={13} />
                        {job.duration}
                      </span>
                      <span className="flex items-center gap-1.5 sm:justify-end">
                        <MapPin size={13} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Projects inside this role */}
                  <div className="space-y-5">
                    {job.projects.map((project, pIdx) => (
                      <div
                        key={pIdx}
                        className="rounded-xl p-5 bg-white/[0.03] border border-white/[0.06]"
                      >
                        <h4 className="font-semibold text-white mb-3">{project.name}</h4>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-2">
                          {project.highlights.map((point, hIdx) => (
                            <li
                              key={hIdx}
                              className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed"
                            >
                              <ChevronRight size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
