import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const inputClass =
  'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-colors duration-200'

const panelVariant = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Contact() {
  const [form, setForm]           = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // UI-ready form — wire to EmailJS / Formspree / backend when needed
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="section-padding relative">
      {/* glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="section-tag">Let's connect</p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Open to new opportunities, backend engineering challenges, and interesting
            collaborations. My inbox is always open.
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {/* ── Info panel ── */}
          <motion.div variants={panelVariant} className="glass-card p-8 space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Information</h3>

            <div className="space-y-5">
              {[
                { icon: Mail,   label: 'Email',    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
                { icon: Phone,  label: 'Phone',    value: personalInfo.phone,    href: null },
                { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors duration-200">
                    <Icon size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-5 border-t border-white/[0.08]">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex gap-3">
                {[
                  { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
                  { href: personalInfo.github,   icon: Github,   label: 'GitHub' },
                  { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.93 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Form panel ── */}
          <motion.div variants={panelVariant} className="glass-card p-8">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-14 text-center"
              >
                <CheckCircle size={52} className="text-cyan-400 mb-4" />
                <h4 className="text-white font-bold text-lg mb-2">Message Sent!</h4>
                <p className="text-gray-400 text-sm">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Name</label>
                    <input type="text" name="name" value={form.name} onChange={onChange} required placeholder="John Doe" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="john@example.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={onChange} required placeholder="Job Opportunity / Collaboration" className={inputClass} />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={onChange} required rows={5}
                    placeholder="Hi Yogaraj, I'd love to discuss..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/20"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Send size={17} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
