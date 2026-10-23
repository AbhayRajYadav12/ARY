import { personal } from '../utils/data'

export default function Footer() {
  return (
    <footer className="border-t border-line pb-28 pt-8">
      <div className="section-container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink">
          {personal.name}
          <span className="mt-1 block text-ink-muted sm:mt-0 sm:ml-2 sm:inline">{personal.location}</span>
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <li>
            <a href={`mailto:${personal.email}`} className="text-ink-muted hover:text-blue-link">
              Email
            </a>
          </li>
          <li>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-blue-link">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-blue-link">
              GitHub
            </a>
          </li>
          <li>
            <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-blue-link">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
