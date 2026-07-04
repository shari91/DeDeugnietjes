import type { ReactNode } from 'react'

import styles from './AlgemeneInfo.module.css'

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

type Fact = { label: string; color: string; icon: ReactNode }

const facts: Fact[] = [
  {
    label: 'Open ma – vr',
    color: 'var(--color-primary)',
    icon: (
      <svg {...svgProps}>
        <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="8" y1="2.5" x2="8" y2="6.5" />
        <line x1="16" y1="2.5" x2="16" y2="6.5" />
      </svg>
    ),
  },
  {
    label: '7u – 18u',
    color: 'var(--color-tertiary)',
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15.5 14" />
      </svg>
    ),
  },
  {
    label: '0 – 3 jaar',
    color: 'var(--color-secondary)',
    icon: (
      <svg {...svgProps}>
        <path d="M9 12h.01" />
        <path d="M15 12h.01" />
        <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
        <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.5-1.5-1" />
      </svg>
    ),
  },
  {
    label: 'Max. 17 kindjes',
    color: 'var(--color-light)',
    icon: (
      <svg {...svgProps}>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 19v-1a5.5 5.5 0 0 1 11 0v1" />
        <path d="M16 5.2a3.2 3.2 0 0 1 0 6" />
        <path d="M17 14.2A5.5 5.5 0 0 1 20.5 19v1" />
      </svg>
    ),
  },
]

const AlgemeneInfo = () => {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.header}>Algemene info</h2>

        <ul className={styles.facts}>
          {facts.map((fact) => (
            <li key={fact.label} className={styles.fact}>
              <span className={styles.badge} style={{ color: fact.color }}>
                {fact.icon}
              </span>
              <span className={styles.factLabel}>{fact.label}</span>
            </li>
          ))}
        </ul>

        <p className={styles.paragraph}>
          Wij zijn geopend van maandag tot en met vrijdag, telkens van 7u tot 18u en bieden opvang in
          groep voor maximum 17 kinderen tot ongeveer 3 jaar.
        </p>
        <p className={styles.paragraph}>
          Wij zorgen voor een kwaliteitsvolle en deskundige begeleiding. Samen willen wij een veilig
          en kindvriendelijk klimaat scheppen dat de ontwikkeling van de kinderen bevordert en hun de
          beste kansen biedt om hun talenten en vaardigheden te ontplooien.
        </p>
      </div>
    </div>
  )
}

export default AlgemeneInfo
