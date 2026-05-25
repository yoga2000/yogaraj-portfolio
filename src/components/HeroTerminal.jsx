import { motion } from 'framer-motion'
import { Server, Database, Shield } from 'lucide-react'

// ── Terminal lines ────────────────────────────────────────────────────────────
// Each line fades in at its own delay so it looks like a live shell session.
const lines = [
  { type: 'cmd', text: 'whoami',                             delay: 0.3  },
  { type: 'out', text: 'Java Developer · Backend Engineer',  delay: 0.58, color: 'text-cyan-300'    },
  { type: 'gap',                                             delay: 0.7  },

  { type: 'cmd', text: 'cat experience.txt',                 delay: 0.85 },
  { type: 'out', text: '1.8 yrs · Healthcare & Enterprise', delay: 1.12, color: 'text-gray-300'    },
  { type: 'gap',                                             delay: 1.25 },

  { type: 'cmd', text: 'skills --list',                      delay: 1.35 },
  { type: 'out', text: '✦ Java 21 · Spring Boot · Spring AI',delay: 1.6,  color: 'text-green-400'  },
  { type: 'out', text: '✦ MongoDB · PostgreSQL · REST APIs', delay: 1.82, color: 'text-green-400'  },
  { type: 'out', text: '✦ Azure OpenAI · AWS Cognito · JWT', delay: 2.04, color: 'text-green-400'  },
  { type: 'gap',                                             delay: 2.18 },

  { type: 'cmd', text: 'status',                             delay: 2.28 },
  { type: 'out', text: '✓ Open to new opportunities',       delay: 2.55, color: 'text-emerald-400' },
]

// ── Floating side-badges (lg screens only) ────────────────────────────────────
const floatingBadges = [
  {
    icon: Server,   label: 'Spring Boot',
    color: 'text-cyan-400',   ring: 'bg-cyan-500/10   border-cyan-500/20',
    style: 'top-6 -right-5',  y: [-5, 5, -5], dur: 3.5, fadeDelay: 1.6,
  },
  {
    icon: Database, label: 'MongoDB',
    color: 'text-green-400',  ring: 'bg-green-500/10  border-green-500/20',
    style: 'bottom-14 -left-5', y: [5, -5, 5], dur: 4.2, fadeDelay: 1.9,
  },
  {
    icon: Shield,   label: 'JWT + RBAC',
    color: 'text-purple-400', ring: 'bg-purple-500/10 border-purple-500/20',
    style: 'top-1/2 -right-5 -translate-y-1/2', y: [-4, 4, -4], dur: 5, fadeDelay: 2.2,
  },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function HeroTerminal() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">

      {/* ── Floating badges — visible only on lg+ to prevent overflow ── */}
      {floatingBadges.map(({ icon: Icon, label, color, ring, style, y, dur, fadeDelay }) => (
        // Outer wrapper: one-time fade-in
        <motion.div
          key={label}
          className={`hidden lg:block absolute ${style} z-20`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: fadeDelay, duration: 0.4, ease: 'easeOut' }}
        >
          {/* Inner wrapper: infinite y float */}
          <motion.div
            animate={{ y }}
            transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut' }}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border ${ring} backdrop-blur-sm whitespace-nowrap`}
          >
            <Icon size={11} className={color} />
            <span className={`${color} text-[11px] font-mono font-medium`}>{label}</span>
          </motion.div>
        </motion.div>
      ))}

      {/* ── Ambient glow behind terminal ── */}
      <div className="absolute inset-4 bg-cyan-500/[0.07] blur-3xl rounded-3xl pointer-events-none" />

      {/* ── Subtle float on the whole card ── */}
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Card entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card overflow-hidden border-cyan-500/20 shadow-2xl shadow-cyan-500/[0.12]"
        >
          {/* ── Window chrome ── */}
          <div className="flex items-center gap-1.5 px-4 py-3 bg-white/[0.03] border-b border-white/[0.07] select-none">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 text-gray-500 text-xs font-mono">yogaraj@dev:~</span>
            <span className="ml-auto text-gray-600 text-xs font-mono">bash</span>
          </div>

          {/* ── Shell body ── */}
          <div className="px-5 py-4 bg-[#08080f] font-mono text-sm min-h-[272px]">
            <div className="space-y-[3px]">
              {lines.map((line, i) => {
                if (line.type === 'gap') {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: line.delay, duration: 0.1 }}
                      className="h-2"
                    />
                  )
                }
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: line.delay, duration: 0.22, ease: 'easeOut' }}
                    className="leading-[1.65]"
                  >
                    {line.type === 'cmd' ? (
                      <>
                        <span className="text-cyan-400 select-none">$ </span>
                        <span className="text-gray-100">{line.text}</span>
                      </>
                    ) : (
                      <span className={`pl-3 ${line.color}`}>{line.text}</span>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* ── Blinking cursor ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.85, duration: 0.3 }}
              className="flex items-center gap-1 mt-2 select-none"
            >
              <span className="text-cyan-400">$ </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                className="inline-block w-[7px] h-[14px] bg-cyan-400 rounded-[2px] align-middle"
              />
            </motion.div>
          </div>

          {/* ── Subtle inner scanline overlay ── */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
