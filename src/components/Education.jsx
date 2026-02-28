import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { education } from '../utils/data'

export default function Education() {
  const ref = useScrollAnimation()

  return (
    <section id="education" className="py-24">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-12">
          <p className="section-subtitle animate-on-scroll">My Academic Background</p>
          <h2 className="section-title animate-on-scroll">Education</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-2 animate-on-scroll" />
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 stagger">
          {education.map((edu, i) => (
            <div key={i} className="animate-on-scroll card group relative overflow-hidden border-glow">
              {/* Gradient corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-3xl" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-slate-500">{edu.period}</p>
                    <p className="text-accent font-display font-semibold text-sm mt-0.5">{edu.institution}</p>
                    <p className="text-slate-500 text-xs font-body">{edu.location}</p>
                  </div>
                </div>

                <h3 className="font-display font-bold text-white text-lg mb-3 leading-snug">
                  {edu.degree}
                </h3>

                {edu.gpa && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-slate-500">GPA:</span>
                    <span className="font-mono text-sm text-accent font-bold">{edu.gpa}</span>
                  </div>
                )}

                <div>
                  <p className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-2">
                    Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span key={course} className="tag text-[10px]">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
