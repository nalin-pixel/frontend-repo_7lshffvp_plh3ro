import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects({ repos }) {
  if (!repos || repos.length === 0) return null
  return (
    <section id="projects" className="py-20 bg-slate-950 text-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <ProjectCard key={repo.html_url} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ repo }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group relative rounded-2xl border border-blue-500/30 bg-white/5 p-6 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-transparent via-blue-500/10 to-fuchsia-500/10" />
      <h3 className="text-xl font-semibold">{repo.name}</h3>
      {repo.description && <p className="mt-2 text-blue-300/90 text-sm line-clamp-3">{repo.description}</p>}
      {repo.topics && repo.topics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {repo.topics.slice(0, 5).map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-blue-900/40 border border-blue-500/30">{t}</span>
          ))}
        </div>
      )}
      <div className="mt-5 flex items-center gap-3">
        {repo.homepage && (
          <a href={repo.homepage} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200">
            <ExternalLink size={16} /> Live
          </a>
        )}
        <a href={repo.html_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200">
          <Github size={16} /> Code
        </a>
      </div>
    </motion.div>
  )
}
