import { useState } from 'react'

import styles from './Contact.module.css'
import ContactModal from './ContactModal'

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.header}>Contact</h2>
        <div className={styles.row}>
          <div className={styles.details}>
            <p className={styles.name}>Kinderdagverblijf &ldquo;De Deugnietjes&rdquo;</p>
            <p>
              Molsebaan 48
              <br />
              2470 Retie
            </p>
            <p>
              Tel:{' '}
              <a className={styles.link} href="tel:+3214708237">
                014/70 82 37
              </a>
            </p>
            <p>
              E-mail:{' '}
              <a className={styles.link} href="mailto:dedeugnietjes@telenet.be">
                dedeugnietjes@telenet.be
              </a>
            </p>
          </div>
          <div className={styles.form}>
            <button type="button" className={styles.cta} onClick={() => setIsOpen(true)}>
              Neem contact op
            </button>
          </div>
        </div>
      </div>

      {isOpen && <ContactModal onClose={() => setIsOpen(false)} />}
    </div>
  )
}

export default Contact
