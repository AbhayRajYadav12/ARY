import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skills } from '../utils/data'

const categoryIcons = {
  Languages: '{ }',
  'Frameworks & Libraries': '⚡',
  'Databases & Cloud': '☁',
  'AI/ML & Analytics': '🤖',
  'DevOps & Tools': '⚙',
}

export default function Skills() {
  const ref = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState(null)
  const categories = Object.keys(skills)

  return (
    <section id="skills" className="py-24 bg-surface-card/30">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-12">
          <p className="section-subtitle animate-on-scroll">What I Work With</p>
          <h2 className="section-title animate-on-scroll">Technical Skills</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-2 animate-on-scroll" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-on-scroll">
          <button
            onClick={() => setActiveCategory(null)}
            className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
              activeCategory === null
                ? 'bg-accent text-surface-dark border-accent font-bold'
                : 'border-surface-border text-slate-400 hover:border-accent/40 hover:text-accent'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-accent text-surface-dark border-accent font-bold'
                  : 'border-surface-border text-slate-400 hover:border-accent/40 hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {categories
            .filter((cat) => !activeCategory || cat === activeCategory)
            .map((category) => (
              <div
                key={category}
                className="animate-on-scroll card group border-glow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-accent text-lg">
                    {categoryIcons[category] || '◈'}
                  </span>
                  <h3 className="font-display font-semibold text-white text-sm">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills[category].map((skill) => (
                    <span
                      key={skill}
                      className="tag hover:bg-accent/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Proficiency highlights */}
        <div className="mt-12 animate-on-scroll">
          <p className="text-center text-slate-600 font-mono text-xs uppercase tracking-widest mb-6">
            Core Proficiencies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Python / ML', level: 92 },
              { label: 'React / Node', level: 85 },
              { label: 'Data Engineering', level: 88 },
              { label: 'Cloud / DevOps', level: 78 },
            ].map(({ label, level }) => (
              <div key={label} className="bg-surface-card border border-surface-border rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-body text-sm text-slate-300">{label}</span>
                  <span className="font-mono text-xs text-accent">{level}%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-blue-400 rounded-full transition-all duration-1000"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
