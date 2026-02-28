import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../utils/data'

export default function Projects() {
  const ref = useScrollAnimation()

  return (
    <section id="projects" className="py-24">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-12">
          <p className="section-subtitle animate-on-scroll">What I've Built</p>
          <h2 className="section-title animate-on-scroll">Featured Projects</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-2 animate-on-scroll" />
        </div>

        <div className="space-y-6">
          {/* Featured projects - large cards */}
          <div className="grid lg:grid-cols-2 gap-6 stagger">
            {projects.filter(p => p.highlight).map((project, i) => (
              <div
                key={project.name}
                className="animate-on-scroll card group relative overflow-hidden border-glow"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-mono text-accent text-xs uppercase tracking-widest mb-1">
                      {project.year}
                    </p>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-slate-500 text-sm font-body">{project.subtitle}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((m) => (
                    <span key={m} className="bg-accent/5 border border-accent/15 text-accent/80 font-mono text-[10px] px-2 py-1 rounded-lg">
                      ✓ {m}
                    </span>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Regular projects - smaller cards */}
          <div className="grid md:grid-cols-2 gap-6 stagger">
            {projects.filter(p => !p.highlight).map((project) => (
              <div
                key={project.name}
                className="animate-on-scroll card group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-mono text-accent text-xs uppercase tracking-widest mb-1">{project.year}</p>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-slate-500 text-xs font-body">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.metrics.map((m) => (
                    <span key={m} className="bg-accent/5 border border-accent/15 text-accent/80 font-mono text-[10px] px-2 py-1 rounded-lg">
                      ✓ {m}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
