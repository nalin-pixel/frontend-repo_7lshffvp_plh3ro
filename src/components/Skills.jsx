import { motion } from 'framer-motion'

function categorizeLanguages(langs) {
  const frontend = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vue', 'Svelte']
  const backend = ['Python', 'Go', 'Rust', 'Ruby', 'Java', 'C#', 'PHP', 'Node']
  const mobile = ['Dart', 'Kotlin', 'Swift', 'Objective-C']
  const devops = ['Shell', 'Dockerfile']

  const groups = { Frontend: [], Backend: [], Mobile: [], 'DevOps / Tools': [] }

  Object.entries(langs || {}).forEach(([name, value]) => {
    if (frontend.includes(name)) groups.Frontend.push([name, value])
    else if (backend.includes(name)) groups.Backend.push([name, value])
    else if (mobile.includes(name)) groups.Mobile.push([name, value])
    else groups['DevOps / Tools'].push([name, value])
  })

  const normalize = (arr) => {
    const total = arr.reduce((a, [, v]) => a + v, 0) || 1
    return arr.map(([n, v]) => ({ name: n, pct: Math.round((v / total) * 100) }))
  }

  return Object.fromEntries(
    Object.entries(groups).map(([k, v]) => [k, normalize(v).sort((a,b)=>b.pct-a.pct)])
  )
}

export default function Skills({ languages }) {
  const groups = categorizeLanguages(languages)
  return (
    <section id="skills" className="py-20 bg-slate-950 text-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {Object.entries(groups).map(([group, items]) => (
            <motion.div key={group} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-blue-500/30 bg-white/5 p-6">
              <h3 className="font-semibold text-blue-200">{group}</h3>
              <div className="mt-4 space-y-3">
                {items.length === 0 ? (
                  <p className="text-sm text-blue-300/70">No data yet.</p>
                ) : (
                  items.map((it) => (
                    <div key={it.name} className="group">
                      <div className="flex justify-between text-sm">
                        <span>{it.name}</span>
                        <span className="text-blue-300/80">{it.pct}%</span>
                      </div>
                      <div className="h-2 mt-1 bg-blue-900/40 rounded overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${it.pct}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-cyan-400" />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
