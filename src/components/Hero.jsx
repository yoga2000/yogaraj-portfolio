import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import HeroTerminal from './HeroTerminal'

// ── Fade-up helper ────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

// ── Typewriter — character-by-character reveal ────────────────────────────────
function TypewriterText({ text, startDelay = 0.25 }) {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.045, delayChildren: startDelay } },
      }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden:  { opacity: 0, y: 8  },
            visible: { opacity: 1, y: 0, transition: { duration: 0.12 } },
          }}
          // non-breaking space so spaces don't collapse
          style={char === ' ' ? { display: 'inline-block', width: '0.3em' } : undefined}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

const socialLinks = (info) => [
  { href: info.linkedin,              icon: Linkedin, label: 'LinkedIn' },
  { href: info.github,                icon: Github,   label: 'GitHub'   },
  { href: `mailto:${info.email}`,     icon: Mail,     label: 'Email'    },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Animated background blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/[0.09] rounded-full blur-3xl"
          animate={{ scale: [1, 1.18, 1], opacity: [0.09, 0.16, 0.09] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/[0.09] rounded-full blur-3xl"
          animate={{ scale: [1, 1.22, 1], opacity: [0.09, 0.16, 0.09] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/[0.04] rounded-full blur-3xl" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: text ── */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            {/* Status badge */}
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Open to new opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 leading-none tracking-tight"
            >
              <span className="text-white">Yogaraj </span>
              <span className="gradient-text">H</span>
            </motion.h1>

            {/* Role — typewriter reveal on "Java Developer" */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4 font-mono"
            >
              &lt;
              <span className="text-cyan-400">
                <TypewriterText text="Java Developer" startDelay={0.28} />
              </span>
              {' '}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                /&gt;
              </motion.span>
            </motion.p>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.35)}
              className="text-base sm:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              Building{' '}
              <span className="text-cyan-400 font-medium">production-ready backends</span> for
              healthcare &amp; enterprise.
              <br className="hidden sm:block" />
              Specializing in{' '}
              <span className="text-blue-400 font-medium">Spring Boot</span>,{' '}
              <span className="text-purple-400 font-medium">AI-integrated APIs</span>, and{' '}
              <span className="text-cyan-400 font-medium">MongoDB</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.45)}
              className="flex flex-wrap items-center gap-4 mb-9 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollTo('#projects')}
                className="px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                View Projects
              </motion.button>

              <motion.a
                href={personalInfo.resumeFile}
                download
                className="flex items-center gap-2 px-7 py-3.5 border border-cyan-500/40 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/70 transition-colors duration-200"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Download size={18} />
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => scrollTo('#contact')}
                className="px-7 py-3.5 border border-white/10 text-gray-300 font-semibold rounded-xl hover:bg-white/5 hover:border-white/20 transition-colors duration-200"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social icons */}
            <motion.div
              {...fadeUp(0.55)}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {socialLinks(personalInfo).map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-colors duration-200"
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Animated terminal — top on mobile ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-center order-1 lg:order-2 px-4 sm:px-0"
          >
            <HeroTerminal />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => scrollTo('#about')}
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-cyan-400 transition-colors duration-200"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={18} className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
