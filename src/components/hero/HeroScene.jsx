import { useEffect, useRef } from 'react'
import { projects } from '../../utils/data'

const poses = [
  'hero-plane hero-plane-back',
  'hero-plane hero-plane-mid',
  'hero-plane hero-plane-front',
]

export default function HeroScene() {
  const stageRef = useRef(null)
  const rigRef = useRef(null)

  useEffect(() => {
    const stage = stageRef.current
    const rig = rigRef.current
    if (!stage || !rig) return undefined

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches) {
      stage.classList.add('hero-stage-still')
      return undefined
    }

    let frame = 0
    let nextX = 0
    let nextY = 0

    const paint = () => {
      frame = 0
      rig.style.transform = `rotateX(${nextX}deg) rotateY(${nextY}deg)`
    }

    const onMove = (event) => {
      const rect = stage.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      const px = (event.clientX - rect.left) / rect.width - 0.5
      const py = (event.clientY - rect.top) / rect.height - 0.5
      nextX = py * -8
      nextY = px * 12
      if (!frame) frame = window.requestAnimationFrame(paint)
    }

    const onLeave = () => {
      nextX = 0
      nextY = 0
      if (!frame) frame = window.requestAnimationFrame(paint)
    }

    stage.addEventListener('pointermove', onMove)
    stage.addEventListener('pointerleave', onLeave)
    return () => {
      stage.removeEventListener('pointermove', onMove)
      stage.removeEventListener('pointerleave', onLeave)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={stageRef} className="hero-stage" aria-hidden="true">
      <div ref={rigRef} className="hero-rig">
        {projects.map((project, index) => (
          <article key={project.name} className={poses[index] || 'hero-plane'}>
            <p className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">{project.period}</p>
            <h3 className="mt-2 text-sm font-semibold text-ink">{project.name}</h3>
            <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-ink-muted">{project.purpose}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
