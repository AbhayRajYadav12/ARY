import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import { personal } from '../utils/data'

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Education', to: 'education' },
  { label: 'Achievements', to: 'achievements' },
  { label: 'Contact', to: 'contact' },
]

const linkClass =
  'nav-link cursor-pointer rounded-full px-2.5 py-1.5 text-[13px] text-ink-muted transition duration-200 hover:bg-hover hover:text-ink'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-paper/95 backdrop-blur-md transition duration-200 ${
        scrolled ? 'border-line shadow-card' : 'border-transparent'
      }`}
    >
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-card focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="section-container flex h-16 items-center justify-between gap-4">
        <Link to="hero" smooth duration={500} offset={-64} className="cursor-pointer shrink-0" onClick={closeMenu}>
          <span className="text-lg font-semibold tracking-tight text-ink">
            AR<span className="text-blue-link">Y</span>
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  spy
                  duration={500}
                  offset={-72}
                  className={linkClass}
                  activeClass="!text-ink bg-hover"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={personal.resume}
            download="Abhay-Raj-Yadav-Resume.pdf"
            className="btn-primary !px-4 !py-2 text-[13px]"
          >
            Resume
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-ink lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="border-t border-line bg-paper lg:hidden" aria-label="Mobile">
          <ul className="section-container flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-72}
                  onClick={closeMenu}
                  className="block cursor-pointer rounded-xl px-3 py-2.5 text-sm text-ink hover:bg-hover"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
