import { motion } from 'framer-motion'

export default function About({ profile, stats, readme }) {
  if (!profile) return null

  const name = profile.name || profile.login
  const bio = profile.bio || 'Passionate developer building useful things.'

  return (
    <section id="about" className="relative py-24 bg-slate-950 text-blue-100">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold">About {name}</h2>
          <p className="mt-4 text-blue-300/90 leading-relaxed">{bio}</p>
          {readme && (
            <details className="mt-6 bg-white/5 border border-blue-500/20 rounded-xl p-4">
              <summary className="cursor-pointer text-blue-200">Profile README</summary>
              <pre className="mt-3 whitespace-pre-wrap text-sm text-blue-300/90 max-h-72 overflow-auto">{readme}</pre>
            </details>
          )}
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
          <StatCard label="Years coding" value={stats?.years_coding || 1} />
          <StatCard label="Public repos" value={stats?.repo_count || profile.public_repos} />
          <StatCard label="Stars" value={stats?.stars || 0} />
          <StatCard label="Forks" value={stats?.forks || 0} />
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-blue-500/30 bg-white/5 p-6">
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
      <p className="text-blue-300 text-sm">{label}</p>
      <p className="text-3xl font-extrabold mt-1">{value}</p>
    </div>
  )
}
