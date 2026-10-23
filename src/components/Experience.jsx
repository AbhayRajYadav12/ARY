import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { experience } from '../utils/data'

export default function Experience() {
  const ref = useScrollAnimation()

  return (
    <section id="experience" className="scroll-mt-20 bg-wash py-20 md:py-28">
      <div className="section-container" ref={ref}>
        <p className="section-kicker animate-on-scroll">Experience</p>
        <h2 className="section-title animate-on-scroll">Where I’ve been building.</h2>

        <ol className="mt-10 space-y-6">
          {experience.map((job) => (
            <li key={job.company} className="animate-on-scroll card card-hover p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{job.role}</h3>
                  <p className="mt-1 text-base text-ink">{job.company}</p>
                </div>
                <p className="font-mono text-xs text-ink-muted sm:text-right">
                  {job.period}
                  <span className="mt-1 block">{job.location}</span>
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
