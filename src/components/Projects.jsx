import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../utils/data'

function DiagramFrame({ children, label }) {
  return (
    <figure className="rounded-2xl border border-line bg-wash/70 p-4">
      <div aria-hidden="true">{children}</div>
      <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
        {label} · diagram, not a screenshot
      </figcaption>
    </figure>
  )
}

function Node({ title, hint, tone = 'bg-card' }) {
  return (
    <div className={`min-w-0 flex-1 rounded-xl border border-line px-2 py-2 text-center ${tone}`}>
      <p className="text-[11px] font-semibold leading-tight text-ink">{title}</p>
      {hint && <p className="mt-0.5 font-mono text-[10px] text-ink-muted">{hint}</p>}
    </div>
  )
}

function NirikshaDiagram() {
  return (
    <DiagramFrame label="Niriksha">
      <div className="flex items-center gap-1.5">
        <Node title="Llama 3.3" hint="Groq" tone="bg-[#e7f2f8]" />
        <span className="text-ink-muted" aria-hidden="true">→</span>
        <Node title="Tool calls" hint="regex" tone="bg-card" />
        <span className="text-ink-muted" aria-hidden="true">→</span>
        <Node title="Rules" hint="escalate" tone="bg-[#eef4ea]" />
      </div>
      <p className="mt-3 text-center text-xs text-ink-muted">Multi-agent loop over live fraud scenarios</p>
    </DiagramFrame>
  )
}

function PdfDiagram() {
  const steps = [
    ['Ingest', 'parse · chunk'],
    ['Retrieve', 'hybrid · rerank'],
    ['Answer', 'cited page'],
  ]
  return (
    <DiagramFrame label="PDF-Summary AI">
      <div className="flex items-center gap-1.5">
        {steps.map(([title, hint], index) => (
          <div key={title} className="flex min-w-0 flex-1 items-center gap-1.5">
            <Node title={title} hint={hint} tone={index === 2 ? 'bg-[#e7f2f8]' : 'bg-card'} />
            {index < steps.length - 1 && <span className="text-ink-muted">→</span>}
          </div>
        ))}
      </div>
    </DiagramFrame>
  )
}

function DemandDiagram() {
  const bars = [
    { h: '42%', color: 'bg-blue-pastel/80' },
    { h: '68%', color: 'bg-sage' },
    { h: '50%', color: 'bg-lavender' },
    { h: '84%', color: 'bg-blue-pastel' },
  ]
  return (
    <DiagramFrame label="DemandRadar">
      <div className="flex h-16 items-end gap-2 px-2">
        {bars.map((bar) => (
          <div key={bar.h} className={`w-full rounded-t-md ${bar.color}`} style={{ height: bar.h }} />
        ))}
      </div>
      <p className="mt-3 text-center font-mono text-[10px] text-ink-muted">React · Flask · MongoDB</p>
    </DiagramFrame>
  )
}

const diagrams = {
  niriksha: NirikshaDiagram,
  pdf: PdfDiagram,
  demand: DemandDiagram,
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const Visual = diagrams[project.diagram]
  const panelId = `${project.name.replace(/\s+/g, '-').toLowerCase()}-details`

  return (
    <article className="card card-hover flex h-full flex-col p-5 sm:p-6">
      <p className="font-mono text-[11px] text-ink-muted">{project.period}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">{project.name}</h3>
      <p className="mt-1 text-sm font-medium text-ink">{project.purpose}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((item) => (
          <li key={item} className="tag">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-5">{Visual && <Visual />}</div>
      <div className="mt-4">
        <button
          type="button"
          className="btn-quiet"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Hide details' : 'View details'}
        </button>
        <div className={`grid transition-[grid-template-rows] duration-200 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div id={panelId} className="overflow-hidden" aria-hidden={!open}>
            <div className="space-y-4 pt-4">
              {project.caseStudy && (
                <>
                  <div>
                    <h4 className="text-sm font-semibold text-ink">Problem</h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{project.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-ink">Approach</h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{project.caseStudy.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-ink">What the resume reports</h4>
                    <ul className="mt-1 space-y-2">
                      {project.caseStudy.results.map((item) => (
                        <li key={item} className="text-sm leading-relaxed text-ink-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
              <p className="text-xs leading-relaxed text-ink-muted">
                No public repository or live demo is listed for this project, so those links are omitted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const ref = useScrollAnimation()

  return (
    <section id="projects" className="scroll-mt-20 page-section">
      <div className="section-container" ref={ref}>
        <p className="section-kicker animate-on-scroll">Projects</p>
        <h2 className="section-title max-w-2xl animate-on-scroll">Work I’m glad to explain.</h2>
        <p className="mt-4 max-w-2xl animate-on-scroll text-base leading-relaxed text-ink-muted">
          Three projects from the resume. Each drawing shows how the system is arranged. These are diagrams, not screenshots.
        </p>
        <div className="mt-10 grid items-start gap-5 lg:grid-cols-2 stagger">
          {projects.map((project) => (
            <div key={project.name} className="animate-on-scroll h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
