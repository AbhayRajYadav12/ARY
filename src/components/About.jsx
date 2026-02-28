import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { personal, achievements } from '../utils/data'

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <p className="section-subtitle animate-on-scroll">Who I Am</p>
            <h2 className="section-title animate-on-scroll">About Me</h2>
            <div className="w-12 h-1 bg-accent rounded-full mb-8 animate-on-scroll" />

            <p className="text-slate-400 leading-relaxed mb-6 animate-on-scroll">
              I'm a Computer Science student at Atria Institute of Technology, Bengaluru, with a Minor in Artificial Intelligence from 
              <span className="text-white"> IIT Ropar</span>. My passion lies at the intersection of AI/ML and full-stack engineering — building 
              systems that are not just functional, but genuinely intelligent.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 animate-on-scroll">
              I specialize in cloud-native analytics platforms, real-time data pipelines, and end-to-end ML solutions. Whether it's a 
              <span className="text-white"> predictive maintenance system</span> for microgrids or an 
              <span className="text-white"> AI-powered honeypot</span> for fraud detection — I love solving complex problems with elegant architecture.
            </p>

            <div className="grid grid-cols-2 gap-4 animate-on-scroll">
              <div className="bg-surface-card border border-surface-border rounded-xl p-4">
                <p className="font-mono text-accent text-2xl font-bold">3+</p>
                <p className="text-slate-500 text-sm font-body">Major Projects</p>
              </div>
              <div className="bg-surface-card border border-surface-border rounded-xl p-4">
                <p className="font-mono text-accent text-2xl font-bold">50+</p>
                <p className="text-slate-500 text-sm font-body">GitHub Contributions</p>
              </div>
              <div className="bg-surface-card border border-surface-border rounded-xl p-4">
                <p className="font-mono text-accent text-2xl font-bold">1</p>
                <p className="text-slate-500 text-sm font-body">Research Publication</p>
              </div>
              <div className="bg-surface-card border border-surface-border rounded-xl p-4">
                <p className="font-mono text-accent text-2xl font-bold">Top 2%</p>
                <p className="text-slate-500 text-sm font-body">BuildAthon 2026</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="stagger">
            <p className="section-subtitle animate-on-scroll">Highlights</p>
            <h3 className="font-display text-2xl font-bold text-white mb-6 animate-on-scroll">
              Achievements & Leadership
            </h3>
            <div className="space-y-4">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="animate-on-scroll card flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-xl flex-shrink-0 
                                  group-hover:bg-accent/20 transition-colors">
                    {a.icon}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-white">{a.title}</p>
                    <p className="text-slate-500 text-sm font-body mt-0.5">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Location & Contact Quick */}
            <div className="mt-6 animate-on-scroll flex flex-wrap gap-3">
              <span className="flex items-center gap-2 text-slate-500 text-sm font-body">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {personal.location}
              </span>
              <span className="flex items-center gap-2 text-slate-500 text-sm font-body">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {personal.email}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
