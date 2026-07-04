import { useState } from 'react'

import styles from './Gallery.module.css'
import g1 from '../../../images/web/g1.jpg'
import g2 from '../../../images/web/g2.jpg'
import g3 from '../../../images/web/g3.jpg'
import g4 from '../../../images/web/g4.jpg'
import g5 from '../../../images/web/g5.jpg'
import g6 from '../../../images/web/g6.jpg'

const slides = [
  { src: g1, alt: 'Onze binnenspeelruimte' },
  { src: g2, alt: 'De slaapkamer' },
  { src: g3, alt: 'Spelen met houten speelgoed' },
  { src: g4, alt: 'De kuikentjes bewonderen' },
  { src: g5, alt: 'Samen bakken' },
  { src: g6, alt: 'Knutselen met verf' },
]

const Gallery = () => {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1))

  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.header}>Sfeerbeelden</h2>
        <div className={styles.carousel}>
          <button className={styles.arrow} onClick={prev} aria-label="Vorige foto">
            &lsaquo;
          </button>
          <div className={styles.viewport}>
            <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
              {slides.map((slide) => (
                <div key={slide.src} className={styles.slide}>
                  <img className={styles.image} src={slide.src} alt={slide.alt} />
                </div>
              ))}
            </div>
          </div>
          <button className={styles.arrow} onClick={next} aria-label="Volgende foto">
            &rsaquo;
          </button>
        </div>
        <div className={styles.dots}>
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ga naar foto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
