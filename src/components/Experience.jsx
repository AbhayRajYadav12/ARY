import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { experience } from '../utils/data'

export default function Experience() {
  const ref = useScrollAnimation()

  return (
    <section id="experience" className="py-24 bg-surface-card/30">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-12">
          <p className="section-subtitle animate-on-scroll">Where I've Worked</p>
          <h2 className="section-title animate-on-scroll">Experience</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-2 animate-on-scroll" />
        </div>

        <div className="max-w-3xl mx-auto">
          {experience.map((job, i) => (
            <div key={i} className="relative animate-on-scroll">
              {/* Timeline line */}
              <div className="absolute left-6 top-14 bottom-0 w-px bg-surface-border" />

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center 
                                  shadow-lg shadow-black/20 relative z-10">
                    <div className="w-3 h-3 rounded-full bg-accent animate-pulse-glow" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 card mb-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{job.role}</h3>
                      <p className="text-accent font-body font-medium">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-slate-400 bg-surface-border px-3 py-1 rounded-full">
                        {job.period}
                      </p>
                      <p className="font-mono text-xs text-slate-600 mt-1">{job.type}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-400 text-sm font-body">
                        <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Certifications */}
          <div className="animate-on-scroll mt-6">
            <p className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-4 ml-[72px]">
              Certifications
            </p>
            <div className="flex gap-6 ml-[72px]">
              {['PHP & MySQL (Certified)', 'Cloud-Native Development'].map((cert) => (
                <div key={cert} className="card flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <p className="font-body text-sm text-slate-300">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
