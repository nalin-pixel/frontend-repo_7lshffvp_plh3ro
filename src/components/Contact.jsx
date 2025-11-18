import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const [pending, setPending] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setPending(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
      website: form.get('website') || undefined,
    }
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Message sent!')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong. Try again later.')
    } finally {
      setPending(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-950 text-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-blue-500/30 bg-white/5 p-6">
            <div className="grid gap-4">
              <input name="name" placeholder="Your name" className="px-3 py-2 rounded bg-slate-900/60 border border-blue-500/30 outline-none" required />
              <input name="email" type="email" placeholder="Email" className="px-3 py-2 rounded bg-slate-900/60 border border-blue-500/30 outline-none" required />
              <input name="website" placeholder="Website (optional)" className="px-3 py-2 rounded bg-slate-900/60 border border-blue-500/30 outline-none" />
              <textarea name="message" placeholder="Your message" rows={5} className="px-3 py-2 rounded bg-slate-900/60 border border-blue-500/30 outline-none" required />
              <button disabled={pending} className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 transition-colors font-semibold">{pending ? 'Sending…' : 'Send'}</button>
              {status && <p className="text-sm text-blue-300/90">{status}</p>}
            </div>
          </motion.form>
          <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-blue-500/30 bg-white/5 p-6">
            <p className="text-blue-300/90">Prefer email or socials? Reach out directly.</p>
            <div className="mt-4 space-y-3">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-3 text-blue-200 hover:text-blue-100"><Mail size={18}/> hello@example.com</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-blue-200 hover:text-blue-100"><Github size={18}/> GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-blue-200 hover:text-blue-100"><Linkedin size={18}/> LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
