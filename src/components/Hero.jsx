import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { FiArrowDown, FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { highlights, personal, status } from '../utils/data'
import profileImg from '../assets/profile.jpg'
import HeroScene from './hero/HeroScene'

const ROAM_SPOTS = [
  [0.04, 0.02],
  [0.4, 0],
  [0.78, 0.04],
  [0.02, 0.38],
  [0.42, 0.42],
  [0.76, 0.36],
  [0.06, 0.74],
  [0.4, 0.78],
  [0.74, 0.7],
]

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)
  const [roaming, setRoaming] = useState(false)
  const [origin, setOrigin] = useState(null)
  const [portraitShift, setPortraitShift] = useState('')
  const portraitRef = useRef(null)
  const roamingRef = useRef(false)
  const deckRef = useRef([])
  const returnTimer = useRef(0)

  const nextShift = () => {
    const anchor = portraitRef.current
    if (!anchor) return ''
    const box = anchor.getBoundingClientRect()
    const margin = 16
    const minTop = 80
    const travelX = Math.max(0, window.innerWidth - box.width - margin * 2)
    const travelY = Math.max(0, window.innerHeight - box.height - minTop - margin)
    if (deckRef.current.length === 0) {
      deckRef.current = ROAM_SPOTS.map((_, index) => index).sort(() => Math.random() - 0.5)
    }
    const [fx, fy] = ROAM_SPOTS[deckRef.current.pop()]
    const left = margin + fx * travelX
    const top = minTop + fy * travelY
    return `translate3d(${left - box.left}px, ${top - box.top}px, 0)`
  }

  const startWander = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const anchor = portraitRef.current
    if (!anchor) return
    window.clearTimeout(returnTimer.current)
    const box = anchor.getBoundingClientRect()
    setOrigin({ top: box.top, left: box.left })
    roamingRef.current = true
    setRoaming(true)
    const shift = nextShift()
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        if (!roamingRef.current) return
        setPortraitShift(shift)
      })
    })
  }

  const stopWander = () => {
    roamingRef.current = false
    setPortraitShift('')
    returnTimer.current = window.setTimeout(() => {
      if (roamingRef.current) return
      setRoaming(false)
      setOrigin(null)
    }, 2700)
  }

  useEffect(() => {
    return () => window.clearTimeout(returnTimer.current)
  }, [])

  return (
    <section id="hero" className="px-4 pb-6 pt-6 sm:px-6 lg:px-8">
      <div className="reading-surface relative mx-auto max-w-6xl rounded-[28px] border border-line px-6 py-10 shadow-card sm:px-10 sm:py-14 lg:px-14">
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <div>
            <p className="mb-5 inline-flex max-w-full items-center rounded-full border border-line bg-wash px-3 py-1 font-mono text-[11px] tracking-wide text-ink-muted">
              {status.label} · {status.detail}
            </p>
            <p className="font-mono text-xs text-blue-link">{personal.name}</p>
            <h1 className="mt-2 max-w-xl text-[2.35rem] font-semibold leading-[1.12] tracking-tight text-ink text-balance sm:text-5xl lg:text-[3.15rem]">
              I design and build <span className="accent-word">thoughtful</span> software.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-[17px]">{personal.intro}</p>
            <p className="mt-3 font-mono text-xs text-blue-link">{personal.positioning}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link to="projects" smooth duration={500} offset={-72} className="btn-primary cursor-pointer">
                View my projects
                <FiArrowRight aria-hidden="true" />
              </Link>
              <a href={personal.resume} download="Abhay-Raj-Yadav-Resume.pdf" className="btn-quiet">
                <FiDownload aria-hidden="true" />
                Download resume
              </a>
              <Link to="contact" smooth duration={500} offset={-72} className="btn-quiet cursor-pointer">
                <FiMail aria-hidden="true" />
                Contact me
              </Link>
            </div>
            <ul className="mt-6 flex flex-wrap gap-4 text-sm">
              <li>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-blue-link hover:text-ink">
                  <FiGithub aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-blue-link hover:text-ink">
                  <FiLinkedin aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="relative h-72 sm:h-80 lg:h-[26rem]">
              <HeroScene />
            </div>
            <div className="relative z-20 mt-4 w-fit lg:pointer-events-none lg:absolute lg:bottom-3 lg:left-3 lg:mt-0">
              <div
                ref={portraitRef}
                className="pointer-events-auto h-40 w-32 sm:h-52 sm:w-40"
                onMouseEnter={startWander}
                onMouseLeave={stopWander}
              >
                {photoFailed ? (
                  <div
                    className={`hero-portrait flex h-40 w-32 items-center justify-center rounded-[50%] border border-line bg-wash text-xl font-semibold text-ink shadow-card sm:h-52 sm:w-40 ${roaming ? 'is-roaming' : ''}`}
                    style={{
                      transform: portraitShift || undefined,
                      top: roaming && origin ? `${origin.top}px` : undefined,
                      left: roaming && origin ? `${origin.left}px` : undefined,
                    }}
                    role="img"
                    aria-label="Portrait of Abhay Raj Yadav unavailable"
                  >
                    ARY
                  </div>
                ) : (
                  <img
                    src={profileImg}
                    alt="Portrait of Abhay Raj Yadav"
                    className={`hero-portrait h-40 w-32 rounded-[50%] border-4 border-card object-cover object-[center_30%] shadow-card sm:h-52 sm:w-40 ${roaming ? 'is-roaming' : ''}`}
                    style={{
                      transform: portraitShift || undefined,
                      top: roaming && origin ? `${origin.top}px` : undefined,
                      left: roaming && origin ? `${origin.left}px` : undefined,
                    }}
                    onError={() => setPhotoFailed(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10 flex items-center justify-between border-t border-line pt-4">
          <p className="rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-paper">Bengaluru</p>
          <Link
            to="about"
            smooth
            duration={500}
            offset={-72}
            className="inline-flex cursor-pointer items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-ink-muted hover:text-ink"
          >
            Scroll
            <FiArrowDown aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
