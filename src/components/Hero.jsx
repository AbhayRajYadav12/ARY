import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { personal } from '../utils/data'

// Profile image import - place your photo at src/assets/profile.jpg
// If no image found, falls back to an elegant placeholder
let profileImg = null
try {
  profileImg = new URL('../assets/profile.jpg', import.meta.url).href
} catch (e) {
  profileImg = null
}

const roles = ['AI/ML Engineer', 'Full-Stack Developer', 'Data Engineer', 'Cloud Architect']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    if (typing) {
      if (displayed.length < currentRole.length) {
        const t = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 70)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container w-full py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-on-scroll visible">
              <p className="font-mono text-accent text-sm tracking-widest uppercase mb-4">
                👋 Hello, I'm
              </p>
              <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Abhay Raj
                <br />
                <span className="gradient-text glow-cyan">Yadav</span>
              </h1>

              <div className="font-display text-xl lg:text-2xl text-slate-400 mb-6 h-8 flex items-center gap-2">
                <span>{displayed}</span>
                <span className="w-0.5 h-6 bg-accent animate-pulse" />
              </div>

              <p className="text-slate-400 font-body leading-relaxed mb-8 max-w-xl text-balance">
                {personal.summary}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link to="projects" smooth duration={600} offset={-64}>
                  <button className="btn-primary">View My Work</button>
                </Link>
                <Link to="contact" smooth duration={600} offset={-64}>
                  <button className="btn-outline">Get In Touch</button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a href={personal.github} target="_blank" rel="noopener noreferrer"
                   className="text-slate-500 hover:text-accent transition-colors duration-200"
                   aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                   className="text-slate-500 hover:text-accent transition-colors duration-200"
                   aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href={`mailto:${personal.email}`}
                   className="text-slate-500 hover:text-accent transition-colors duration-200"
                   aria-label="Email">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href={personal.leetcode} target="_blank" rel="noopener noreferrer"
                   className="text-slate-500 hover:text-accent transition-colors duration-200 font-mono text-xs border border-slate-700 px-2 py-1 rounded-md hover:border-accent/40"
                   aria-label="LeetCode">
                  LC
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-blue-500/20 blur-xl scale-110" />
              {/* Border decoration */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/40 via-transparent to-blue-500/40 p-[1px]">
                <div className="w-full h-full rounded-2xl bg-surface-dark" />
              </div>
              {/* Image container */}
              <div className="relative w-64 h-72 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border border-surface-border animate-float">
                {profileImg ? (
                  <img
                    src={profileImg}
                    alt="Abhay Raj Yadav"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                {/* Fallback placeholder */}
                <div
                  className={`w-full h-full bg-gradient-to-br from-surface-card to-surface-dark flex flex-col items-center justify-center gap-3 ${profileImg ? 'hidden' : 'flex'}`}
                >
                  <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-accent">A</span>
                  </div>
                  <p className="font-mono text-xs text-slate-600 text-center px-4">
                    Add profile.jpg to<br />src/assets/
                  </p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-surface-card border border-surface-border rounded-xl px-3 py-2 shadow-xl">
                <p className="font-mono text-xs text-accent">8.85 CGPA</p>
                <p className="font-body text-[10px] text-slate-500">IIT Ropar AI Minor</p>
              </div>
              <div className="absolute -top-4 -left-4 bg-surface-card border border-surface-border rounded-xl px-3 py-2 shadow-xl">
                <p className="font-mono text-xs text-accent">Top 2%</p>
                <p className="font-body text-[10px] text-slate-500">AI Impact Summit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono text-xs text-slate-600">scroll</span>
          <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
