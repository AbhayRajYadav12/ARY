import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skills } from '../utils/data'

export default function Skills() {
  const ref = useScrollAnimation()

  return (
    <section id="skills" className="scroll-mt-20 bg-wash py-20 md:py-28">
      <div className="section-container" ref={ref}>
        <p className="section-kicker animate-on-scroll">Skills</p>
        <h2 className="section-title animate-on-scroll">Tools I actually use.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 stagger">
          {skills.map((group) => (
            <article key={group.title} className="animate-on-scroll card p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-ink transition duration-200 hover:border-sage hover:bg-hover"
                  >
                    {item}
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
