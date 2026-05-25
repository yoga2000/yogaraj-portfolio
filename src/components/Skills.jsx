import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Code2, Server, Cpu, Monitor, Database, Shield, Wrench } from 'lucide-react'
import { skills } from '../data/portfolioData'

// Category icon mapping
const categoryIcons = {
  Languages:         Code2,
  Backend:           Server,
  'AI & Cloud':      Cpu,
  Frontend:          Monitor,
  Databases:         Database,
  'Auth & Security': Shield,
  'Tools & Concepts':Wrench,
}

// Color palette per category
const palette = {
  orange: {
    card:  'from-orange-500/10 to-red-500/10 border-orange-500/20 hover:border-orange-500/40',
    icon:  'text-orange-400',
    badge: 'bg-orange-500/10 text-orange-300 border-orange-500/20 hover:bg-orange-500/20',
  },
  cyan: {
    card:  'from-cyan-500/10 to-blue-500/10 border-cyan-500/20 hover:border-cyan-500/40',
    icon:  'text-cyan-400',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20',
  },
  purple: {
    card:  'from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-500/40',
    icon:  'text-purple-400',
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/20',
  },
  green: {
    card:  'from-green-500/10 to-teal-500/10 border-green-500/20 hover:border-green-500/40',
    icon:  'text-green-400',
    badge: 'bg-green-500/10 text-green-300 border-green-500/20 hover:bg-green-500/20',
  },
  yellow: {
    card:  'from-yellow-500/10 to-amber-500/10 border-yellow-500/20 hover:border-yellow-500/40',
    icon:  'text-yellow-400',
    badge: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20 hover:bg-yellow-500/20',
  },
  red: {
    card:  'from-rose-500/10 to-pink-500/10 border-rose-500/20 hover:border-rose-500/40',
    icon:  'text-rose-400',
    badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20 hover:bg-rose-500/20',
  },
  blue: {
    card:  'from-blue-500/10 to-indigo-500/10 border-blue-500/20 hover:border-blue-500/40',
    icon:  'text-blue-400',
    badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20',
  },
}

// Item animation variant (stagger child)
const itemVariant = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

// ── Individual skill card with 3-D tilt ──────────────────────────────────────
function SkillCard({ group }) {
  const ref = useRef(null)
  const rotX = useMotionValue(0)
  const rotY = useMotionValue(0)
  const springCfg = { damping: 22, stiffness: 360 }
  const sRotX = useSpring(rotX, springCfg)
  const sRotY = useSpring(rotY, springCfg)

  const onMove = (e) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    rotX.set(((e.clientY - r.top)  / r.height - 0.5) * -12)
    rotY.set(((e.clientX - r.left) / r.width  - 0.5) *  12)
  }
  const onLeave = () => { rotX.set(0); rotY.set(0) }

  const colors  = palette[group.color] || palette.blue
  const IconCmp = categoryIcons[group.category]

  return (
    <motion.div
      ref={ref}
      variants={itemVariant}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: sRotX, rotateY: sRotY, transformPerspective: 900 }}
      className={`glass-card p-6 bg-gradient-to-br ${colors.card} transition-colors duration-300 cursor-default`}
    >
      {/* Header row */}
      <div className="flex items-center gap-3 mb-5">
        {IconCmp && (
          <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 ${colors.icon}`}>
            <IconCmp size={17} />
          </div>
        )}
        <h3 className={`font-bold text-base ${colors.icon}`}>{group.category}</h3>
      </div>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2">
        {group.items.map((skill) => (
          <span
            key={skill}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors duration-150 ${colors.badge}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="section-tag">What I work with</p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Stagger grid */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {skills.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
