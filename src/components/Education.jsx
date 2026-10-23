import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { education } from '../utils/data'

export default function Education() {
  const ref = useScrollAnimation()

  return (
    <section id="education" className="scroll-mt-20 py-20 md:py-28">
      <div className="section-container" ref={ref}>
        <p className="section-kicker animate-on-scroll">Education</p>
        <h2 className="section-title animate-on-scroll">Where I studied.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 stagger">
          {education.map((school) => (
            <article key={school.institution} className="animate-on-scroll card card-hover p-6 sm:p-7">
              <p className="font-mono text-[11px] text-ink-muted">{school.period}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">{school.institution}</h3>
              <p className="mt-1 text-sm text-ink">{school.degree}</p>
              <p className="mt-2 text-sm text-ink-muted">
                {school.location}
                {school.gpa ? ` · ${school.gpa}` : ''}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {school.courses.map((course) => (
                  <li key={course} className="tag">
                    {course}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
