import { useEffect, useState } from 'react'

import useMediaQuery from '../../../hooks/useMediaQuery'
import logo from '../../../artwork/logo.svg'
import styles from './Navigation.module.css'

const links = [
  { id: 'vision', label: 'onze visie' },
  { id: 'info', label: 'algemene info' },
  { id: 'gallery', label: "sfeerbeelden" },
  { id: 'about', label: 'ons team' },
  { id: 'contact', label: 'contact' },
]

// Volgorde waarin de secties op de pagina staan (incl. 'home' bovenaan, die
// geen menu-item heeft — zolang die bovenaan is, licht er geen tab op).
const sectionOrder = ['home', ...links.map((link) => link.id)]

const Navigation = () => {
  const isBigScreen = useMediaQuery('(min-width: 900px)')
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  // Scroll-spy: markeert de sectie die momenteel bovenaan in beeld staat.
  useEffect(() => {
    const sections = sectionOrder
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const navHeight =
      parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 70

    const lastId = links[links.length - 1].id
    const visible = new Map<string, boolean>()

    const computeActive = () => {
      // Onderaan de pagina (bv. op grote schermen waar de laatste sectie de
      // detectieband niet meer bereikt): forceer de laatste tab als actief.
      const atBottom =
        window.innerHeight + Math.ceil(window.scrollY) >= document.documentElement.scrollHeight - 2
      if (atBottom) {
        setActive(lastId)
        return
      }
      // Anders: bovenste zichtbare sectie in DOM-volgorde is de actieve.
      setActive(sectionOrder.find((id) => visible.get(id)) ?? null)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting))
        computeActive()
      },
      // Detectieband: net onder de navigatie tot ~40% van het scherm.
      { rootMargin: `-${navHeight + 2}px 0px -60% 0px`, threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    window.addEventListener('scroll', computeActive, { passive: true })
    window.addEventListener('resize', computeActive)
    computeActive()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', computeActive)
      window.removeEventListener('resize', computeActive)
    }
  }, [])

  const scrollTo = (id: string) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView()
  }

  if (isBigScreen) {
    return (
      <nav className={styles.nav}>
        <button className={styles.logoButton} onClick={() => scrollTo('home')} aria-label="Naar boven">
          <img className={styles.logo} src={logo} alt="De Deugnietjes" />
        </button>
        <div className={styles.links}>
          {links.map((link) => (
            <button
              key={link.id}
              className={`${styles.link} ${active === link.id ? styles.active : ''}`}
              aria-current={active === link.id ? 'true' : undefined}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    )
  }

  return (
    <nav className={styles.navMobile}>
      <button
        className={styles.burger}
        aria-label="Menu openen"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <button className={styles.logoButton} onClick={() => scrollTo('home')} aria-label="Naar boven">
        <img className={styles.logo} src={logo} alt="De Deugnietjes" />
      </button>

      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        onClick={() => setIsOpen(false)}
      />
      <aside className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <button className={styles.close} aria-label="Menu sluiten" onClick={() => setIsOpen(false)}>
          &times;
        </button>
        <div className={styles.drawerLinks}>
          {links.map((link) => (
            <button key={link.id} className={styles.drawerLink} onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          ))}
        </div>
      </aside>
    </nav>
  )
}

export default Navigation
