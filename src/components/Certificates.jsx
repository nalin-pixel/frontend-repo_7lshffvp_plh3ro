import { motion } from 'framer-motion'

const providers = [
  { name: 'Google', color: 'from-emerald-400 to-cyan-400' },
  { name: 'Meta', color: 'from-fuchsia-400 to-pink-400' },
  { name: 'AWS', color: 'from-yellow-400 to-amber-400' },
  { name: 'Microsoft', color: 'from-blue-400 to-indigo-400' },
  { name: 'Stanford', color: 'from-red-400 to-rose-400' },
  { name: 'Coursera', color: 'from-sky-400 to-cyan-400' },
]

export default function Certificates() {
  return (
    <section className="py-20 bg-slate-950 text-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-blue-500/30 bg-white/5 p-6 overflow-hidden relative">
              <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-2xl bg-gradient-to-br ${p.color}`} />
              <h3 className="text-xl font-semibold">{p.name} Certified</h3>
              <p className="text-blue-300/90 mt-2 text-sm">Advanced credential in modern technologies.</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200">View</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
