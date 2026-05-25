import { useState } from 'react'
import { motion } from 'framer-motion'

const sizeMap = {
  sm: { ring: 'w-16 h-16',   text: 'text-lg',  dot: 'w-3 h-3 bottom-0.5 right-0.5' },
  md: { ring: 'w-24 h-24',   text: 'text-2xl', dot: 'w-4 h-4 bottom-1 right-1' },
  lg: { ring: 'w-40 h-40 sm:w-48 sm:h-48', text: 'text-4xl', dot: 'w-4 h-4 sm:w-5 sm:h-5 bottom-2 right-2 sm:bottom-3 sm:right-3' },
  xl: { ring: 'w-52 h-52 sm:w-64 sm:h-64', text: 'text-5xl', dot: 'w-5 h-5 sm:w-6 sm:h-6 bottom-3 right-3 sm:bottom-4 sm:right-4' },
}

export default function ProfileImage({ size = 'lg', floating = false }) {
  const [err, setErr] = useState(false)
  const { ring, text, dot } = sizeMap[size] || sizeMap.lg

  return (
    <motion.div
      className="relative"
      animate={floating ? { y: [0, -14, 0] } : undefined}
      transition={floating ? { duration: 5, repeat: Infinity, ease: 'easeInOut' } : undefined}
    >
      {/* Pulsing outer glow — decorative only */}
      <motion.div
        className={`${ring} absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/25 to-blue-600/25 blur-2xl`}
        animate={{ opacity: [0.4, 0.85, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gradient border ring */}
      <div
        className={`${ring} relative rounded-full p-[3px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl shadow-cyan-500/40`}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-[#07071a]">
          {!err ? (
            <img
              src="/profile.jpg"
              alt="Yogaraj H — Java Developer"
              className="w-full h-full object-cover object-top"
              onError={() => setErr(true)}
            />
          ) : (
            /* ── Fallback avatar with initials ── */
            <div className="w-full h-full bg-gradient-to-br from-slate-800 via-[#0a1530] to-[#0d0d2b] flex flex-col items-center justify-center gap-1 select-none">
              <span className={`font-black text-white ${text} tracking-tight leading-none`}>
                YH
              </span>
              <span className="text-cyan-400/70 text-xs font-mono">Java Dev</span>
            </div>
          )}
        </div>
      </div>

      {/* Animated online indicator */}
      <motion.div
        className={`absolute ${dot} rounded-full bg-emerald-400 border-2 border-[#050510] shadow-lg shadow-emerald-400/60 z-10`}
        animate={{ scale: [1, 1.35, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
