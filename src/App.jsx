import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

function App() {
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState(null)

  const fetchAggregate = async (link) => {
    try {
      setPending(true)
      setError(null)
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/github/aggregate?link=${encodeURIComponent(link)}`)
      if (!res.ok) throw new Error('Failed to fetch from GitHub')
      const json = await res.json()
      setData(json)
    } catch (e) {
      setError(e.message)
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Hero onSubmitLink={fetchAggregate} pending={pending} error={error} />
      <About profile={data?.profile} stats={data?.stats} readme={data?.readme} />
      <Skills languages={data?.languages} />
      <Projects repos={data?.repos} />
      <Testimonials />
      <Certificates />
      <Contact />
      <footer className="py-10 text-center text-blue-300/70">Built with love • Neon mode</footer>
    </div>
  )
}

export default App
