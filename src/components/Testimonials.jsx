import { motion } from 'framer-motion'

const generated = [
  {
    name: 'Ava Thompson',
    role: 'CTO, NovaLabs',
    text: 'Delivered a blazing-fast, pixel-perfect experience with impeccable attention to detail.'
  },
  {
    name: 'Kai Nakamura',
    role: 'Lead Engineer, SynthWorks',
    text: 'Brings futuristic UX with production-quality code. A rare combination of craft and speed.'
  },
  {
    name: 'Mira Patel',
    role: 'PM, HyperGrid AI',
    text: 'Understands business goals and ships high-impact features ahead of schedule.'
  },
  {
    name: 'Ethan Zhao',
    role: 'Founder, Helix Cloud',
    text: 'Transformed our product with thoughtful architecture and elegant animations.'
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-950 text-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Testimonials</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {generated.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-blue-500/30 bg-white/5 p-6">
              <p className="text-blue-200/90">“{t.text}”</p>
              <div className="mt-4 text-sm text-blue-300/80">{t.name} · {t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
