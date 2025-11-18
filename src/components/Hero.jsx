import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Github, Mail, Link as LinkIcon } from 'lucide-react'

export default function Hero({ onSubmitLink, pending, error }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.github.value.trim()
    if (value) onSubmitLink(value)
  }

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_0_35px_rgba(59,130,246,0.55)]"
        >
          Futuristic Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-blue-200/90 max-w-2xl"
        >
          Neon-lit, cyberpunk-inspired portfolio powered by your GitHub data.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 w-full max-w-xl bg-white/5 backdrop-blur-md border border-blue-500/30 rounded-xl p-2 flex items-stretch gap-2"
        >
          <div className="flex items-center gap-2 px-3 text-blue-300">
            <LinkIcon size={18} className="opacity-80" />
            <span className="text-sm opacity-80 hidden sm:block">github.com/</span>
          </div>
          <input
            name="github"
            type="text"
            placeholder="your-username or https://github.com/your-username"
            className="flex-1 bg-transparent outline-none text-blue-100 placeholder:text-blue-300/50"
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors font-semibold"
            disabled={pending}
          >
            {pending ? 'Loading…' : 'Generate'}
          </button>
        </motion.form>
        {error && (
          <p className="mt-3 text-sm text-rose-300">{error}</p>
        )}

        <div className="mt-10 flex items-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
            <Mail size={18} /> Contact
          </a>
          <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors">
            <Github size={18} /> View Projects
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />
    </section>
  )
}
