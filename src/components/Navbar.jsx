import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useTheme } from '../hooks/useTheme'

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface-dark/90 backdrop-blur-xl border-b border-surface-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="hero" smooth duration={600} className="cursor-pointer">
          <span className="font-display font-bold text-xl text-white">
            AR<span className="text-accent">Y</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth
                duration={600}
                offset={-64}
                className="text-slate-400 hover:text-accent font-body text-sm px-3 py-2 rounded-lg 
                           hover:bg-accent/5 transition-all duration-200 cursor-pointer"
                activeClass="text-accent"
                spy
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl border border-surface-border bg-surface-card 
                       flex items-center justify-center text-slate-400 hover:text-accent 
                       hover:border-accent/40 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 rounded-xl border border-surface-border bg-surface-card 
                       flex flex-col items-center justify-center gap-1.5 transition-all"
            aria-label="Menu"
          >
            <span className={`w-4 h-0.5 bg-slate-400 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-4 h-0.5 bg-slate-400 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-4 h-0.5 bg-slate-400 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-dark/95 backdrop-blur-xl border-b border-surface-border">
          <ul className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  to={link.toLowerCase()}
                  smooth
                  duration={600}
                  offset={-64}
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-300 hover:text-accent font-body px-4 py-2.5 
                             rounded-lg hover:bg-accent/5 transition-all cursor-pointer"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
