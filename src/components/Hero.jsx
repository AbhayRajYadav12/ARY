import { useState } from 'react'
import { Link } from 'react-scroll'
import { FiArrowRight, FiArrowDown } from 'react-icons/fi'
import { personal } from '../utils/data'
import profileImg from '../assets/profile.jpg'

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="hero" className="px-4 pb-6 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-line bg-card px-6 py-10 shadow-card sm:px-10 sm:py-14 lg:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <p className="mb-5 inline-flex items-center rounded-full border border-line bg-wash px-3 py-1 font-mono text-[11px] tracking-wide text-ink-muted">
              Computer Science and Design · graduating 2027
            </p>
            <h1 className="max-w-xl text-[2.35rem] font-semibold leading-[1.12] tracking-tight text-ink text-balance sm:text-5xl lg:text-[3.15rem]">
              I design and build <span className="accent-word">thoughtful</span> software.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-[17px]">
              {personal.intro}
            </p>
            <p className="mt-3 font-mono text-xs text-blue-link">{personal.positioning}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link to="projects" smooth duration={500} offset={-72} className="btn-primary cursor-pointer">
                Explore my work
                <FiArrowRight aria-hidden="true" />
              </Link>
              <Link to="contact" smooth duration={500} offset={-72} className="btn-quiet cursor-pointer">
                Get in touch
                <FiArrowRight className="transition duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="btn-quiet">
                Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[50%] bg-wash" aria-hidden="true" />
              {photoFailed ? (
                <div
                  className="relative flex h-72 w-60 items-center justify-center rounded-[50%] bg-wash text-3xl font-semibold text-ink sm:h-80 sm:w-64"
                  role="img"
                  aria-label="Portrait of Abhay Raj Yadav unavailable"
                >
                  ARY
                </div>
              ) : (
                <img
                  src={profileImg}
                  alt="Portrait of Abhay Raj Yadav"
                  className="relative h-72 w-60 rounded-[50%] object-cover object-[center_30%] sm:h-80 sm:w-64"
                  onError={() => setPhotoFailed(true)}
                />
              )}
              <p className="absolute -bottom-3 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-line bg-card px-3 py-2 text-center shadow-card">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted">Studying</span>
                <span className="text-sm font-semibold text-ink">CS &amp; Design · 2027</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-line pt-4">
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
