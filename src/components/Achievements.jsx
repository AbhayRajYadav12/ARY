import { FiAward, FiFlag, FiBookOpen, FiGithub } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { achievements } from '../utils/data'

const icons = [FiAward, FiFlag, FiBookOpen, FiGithub]

export default function Achievements() {
  const ref = useScrollAnimation()

  return (
    <section id="achievements" className="scroll-mt-20 page-section">
      <div className="section-container" ref={ref}>
        <p className="section-kicker animate-on-scroll">Achievements</p>
        <h2 className="section-title animate-on-scroll">A few things worth mentioning.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 stagger">
          {achievements.map((item, index) => {
            const Icon = icons[index] || FiAward
            return (
              <article key={item.title} className="animate-on-scroll card p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e7f2f8] text-blue-link">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
                    {item.items && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {item.items.map((cert) => (
                          <li key={cert} className="tag">
                            {cert}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
