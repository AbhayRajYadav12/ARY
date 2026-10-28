import { useState } from 'react'
import { Link } from 'react-scroll'
import { FiArrowDown, FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { highlights, personal, status } from '../utils/data'
import profileImg from '../assets/profile.jpg'
import HeroScene from './hero/HeroScene'

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

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
            <div className="mt-4 lg:pointer-events-none lg:absolute lg:bottom-3 lg:left-3 lg:mt-0">
              {photoFailed ? (
                <div
                  className="flex h-36 w-28 items-center justify-center rounded-[50%] border border-line bg-wash text-xl font-semibold text-ink shadow-card sm:h-44 sm:w-36"
                  role="img"
                  aria-label="Portrait of Abhay Raj Yadav unavailable"
                >
                  ARY
                </div>
              ) : (
                <img
                  src={profileImg}
                  alt="Portrait of Abhay Raj Yadav"
                  className="h-36 w-28 rounded-[50%] border-4 border-card object-cover object-[center_30%] shadow-card sm:h-44 sm:w-36"
                  onError={() => setPhotoFailed(true)}
                />
              )}
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
