import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
import { projects } from '../data/portfolioData'

// Map each project index → image path & gradient fallback
const projectMeta = [
  { img: '/projects/project-1.jpg', gradient: 'from-cyan-900/60 via-blue-900/60 to-slate-900' },
  { img: '/projects/project-2.jpg', gradient: 'from-blue-900/60 via-purple-900/60 to-slate-900' },
  { img: '/projects/project-3.jpg', gradient: 'from-purple-900/60 via-pink-900/50 to-slate-900' },
]

const itemVariant = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// ── Single project card with 3-D tilt ────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [imgErr, setImgErr] = useState(false)
  const ref    = useRef(null)
  const rotX   = useMotionValue(0)
  const rotY   = useMotionValue(0)
  const sRotX  = useSpring(rotX, { damping: 20, stiffness: 300 })
  const sRotY  = useSpring(rotY, { damping: 20, stiffness: 300 })

  const onMove = (e) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    rotX.set(((e.clientY - r.top)  / r.height - 0.5) * -10)
    rotY.set(((e.clientX - r.left) / r.width  - 0.5) *  10)
  }
  const onLeave = () => { rotX.set(0); rotY.set(0) }

  const { img, gradient } = projectMeta[index] || projectMeta[0]

  return (
    <motion.div
      ref={ref}
      variants={itemVariant}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: sRotX, rotateY: sRotY, transformPerspective: 1000 }}
      className={`glass-card flex flex-col group hover:border-cyan-500/30 transition-colors duration-300 overflow-hidden ${
        project.highlight ? 'border-cyan-500/25 bg-gradient-to-b from-cyan-500/[0.04] to-transparent' : ''
      }`}
    >
      {/* ── Project image / gradient placeholder ── */}
      <div className="h-44 relative overflow-hidden shrink-0">
        {!imgErr ? (
          <img
            src={img}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgErr(true)}
          />
        ) : (
          // Gradient fallback — shown when image is missing
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <div className="text-center select-none">
              <div className="text-white/10 font-mono text-xs mb-1">{project.tech[0]}</div>
              <div className="text-white/5 font-black text-4xl">{ '{}'}</div>
            </div>
          </div>
        )}
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/80 via-transparent to-transparent" />

        {/* Featured badge overlaid on image */}
        {project.highlight && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 text-yellow-400 text-xs font-semibold bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-yellow-400/20">
            <Star size={11} fill="currentColor" />
            Featured
          </div>
        )}
      </div>

      {/* ── Card body ── */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 leading-snug mb-2">
          {project.name}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Feature list */}
        <ul className="space-y-1.5 mb-5 flex-grow">
          {project.features.map((feature, fIdx) => (
            <li key={fIdx} className="flex items-start gap-2 text-gray-500 text-xs leading-relaxed">
              <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-200"
          >
            <Github size={15} />
            GitHub
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-gray-600 cursor-default select-none">
              <ExternalLink size={15} />
              Private / Internal
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      {/* glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="section-tag">What I've built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Stagger grid */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
