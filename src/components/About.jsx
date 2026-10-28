import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { personal } from '../utils/data'

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="scroll-mt-20 page-section">
      <div className="section-container" ref={ref}>
        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
          <div>
            <p className="section-kicker animate-on-scroll">About</p>
            <h2 className="section-title animate-on-scroll">A student who builds production software.</h2>
            <div className="mt-6 max-w-2xl space-y-4">
              {personal.about.map((paragraph) => (
                <p key={paragraph} className="animate-on-scroll text-base leading-relaxed text-ink-muted sm:text-[17px]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="animate-on-scroll card p-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">Academic note</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">8.85</p>
            <p className="mt-1 text-sm text-ink-muted">CGPA out of 10 at Atria Institute of Technology.</p>
            <div className="mt-5 border-t border-line pt-5">
              <p className="text-sm font-semibold text-ink">Minor in Artificial Intelligence</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                Indian Institute of Technology, Ropar · Sep 2024 – Sep 2025
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
