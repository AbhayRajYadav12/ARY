import { useState } from 'react'
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiPhone, FiCheck } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { personal } from '../utils/data'

export default function Contact() {
  const ref = useScrollAnimation()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const links = [
    { label: 'LinkedIn', value: personal.linkedinLabel, href: personal.linkedin, icon: FiLinkedin },
    { label: 'GitHub', value: personal.githubLabel, href: personal.github, icon: FiGithub },
    { label: 'Phone', value: personal.phone, href: personal.phoneHref, icon: FiPhone },
    { label: 'Location', value: personal.location, href: null, icon: FiMapPin },
  ]

  return (
    <section id="contact" className="scroll-mt-20 page-section">
      <div className="section-container" ref={ref}>
        <div className="reading-surface animate-on-scroll rounded-[28px] border border-line px-6 py-10 shadow-card sm:px-10 sm:py-14">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title max-w-2xl">Have a project in mind or want to talk about technology?</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
            Recruiters, engineers, and people I’d enjoy building with are welcome to write. Email is the most direct way to reach me.
          </p>

          <div className="mt-8 flex flex-col gap-4 rounded-card border border-line bg-wash p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f2f8] text-blue-link">
                <FiMail aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">Email</p>
                <a href={`mailto:${personal.email}`} className="text-base font-semibold text-ink hover:text-blue-link">
                  {personal.email}
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="button" className="btn-primary" onClick={copyEmail} aria-live="polite">
                {copied ? <FiCheck aria-hidden="true" /> : null}
                {copied ? 'Copied' : 'Copy email'}
              </button>
              <a href={`mailto:${personal.email}`} className="btn-quiet self-center">
                Email me
              </a>
            </div>
          </div>
          <p className="sr-only" aria-live="polite">
            {copied ? 'Email address copied.' : ''}
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {links.map((link) => {
              const Icon = link.icon
              const inner = (
                <>
                  <Icon className="shrink-0 text-blue-link" aria-hidden="true" />
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted">{link.label}</span>
                    <span className="text-sm text-ink">{link.value}</span>
                  </span>
                </>
              )
              return (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 rounded-2xl border border-line px-4 py-3 transition duration-200 hover:border-sage hover:bg-hover"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 rounded-2xl border border-line px-4 py-3">{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
