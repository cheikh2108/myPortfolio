import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'iconify-icon'

function SmoothScrollController() {
  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    // Defer Lenis loading until after initial paint
    const lenisTimer = setTimeout(() => {
      import('lenis').then(({ default: Lenis }) => {
        const lenis = new Lenis({
          smoothWheel: true,
          wheelMultiplier: 0.9,
          touchMultiplier: 1.1,
          lerp: 0.08,
        })

        const previousScrollRestoration = window.history.scrollRestoration
        window.history.scrollRestoration = 'manual'
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

        let rafId = 0
        const raf = (time) => {
          lenis.raf(time)
          rafId = window.requestAnimationFrame(raf)
        }
        rafId = window.requestAnimationFrame(raf)

        const handleAnchorClick = (event) => {
          const link = event.target.closest('a[href^="#"]')
          if (!link) return

          const href = link.getAttribute('href')
          if (!href || href === '#') return

          const target = document.querySelector(href)
          if (!target) return

          event.preventDefault()
          lenis.scrollTo(target, { duration: 1.05, offset: -24 })
        }

        document.addEventListener('click', handleAnchorClick)

        return () => {
          document.removeEventListener('click', handleAnchorClick)
          window.cancelAnimationFrame(rafId)
          window.history.scrollRestoration = previousScrollRestoration
          lenis.destroy()
        }
      })
    }, 1500) // Defer Lenis initialization until after initial render
    
    return () => clearTimeout(lenisTimer)
  }, [])

  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScrollController />
    <App />
  </React.StrictMode>,
)