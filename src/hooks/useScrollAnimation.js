import { useEffect, useRef } from 'react'

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold }
    )

    // Observe direct element + all .animate-on-scroll children
    const targets = element.querySelectorAll('.animate-on-scroll')
    if (element.classList.contains('animate-on-scroll')) {
      observer.observe(element)
    }
    targets.forEach((t) => observer.observe(t))

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
