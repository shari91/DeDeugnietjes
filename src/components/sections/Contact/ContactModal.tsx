import { useEffect, useState, type FormEvent } from 'react'

import styles from './ContactModal.module.css'

// ───────────────────────────────────────────────────────────────────────────
//  E-MAILVERZENDING  (via Web3Forms — gratis, geen server nodig)
//
//  1. Ga naar https://web3forms.com
//  2. Vul het e-mailadres van De Deugnietjes in (dedeugnietjes@telenet.be)
//     en kopieer de "Access Key".
//  3. Plak die key hieronder.
//
//  Later een ander ontvangst-adres? Maak een nieuwe (gratis) key aan met dat
//  adres en vervang enkel de regel hieronder.
// ───────────────────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = 'PLAK-HIER-JE-WEB3FORMS-ACCESS-KEY'

const dagen = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag']

type Status = 'idle' | 'sending' | 'success' | 'error'

interface ContactModalProps {
  onClose: () => void
}

const ContactModal = ({ onClose }: ContactModalProps) => {
  const [status, setStatus] = useState<Status>('idle')

  // Sluiten met Escape + achtergrond-scroll blokkeren zolang de modal open is.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)
    const gekozenDagen = data.getAll('dagen').join(', ')

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'Nieuw bericht via de website — De Deugnietjes',
      from_name: 'Website De Deugnietjes',
      naam: data.get('naam'),
      email: data.get('email'),
      bericht: data.get('bericht'),
      gewenste_dagen: gekozenDagen || '—',
      vermoedelijke_startdatum: data.get('startdatum') || '—',
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await res.json()
      setStatus(result.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.head}>
          <h2 id="contact-title" className={styles.title}>
            Neem contact op
          </h2>
          <button type="button" className={styles.close} aria-label="Sluiten" onClick={onClose}>
            &times;
          </button>
        </header>

        {status === 'success' ? (
          <div className={styles.body}>
            <p className={styles.success}>
              Bedankt! Je bericht is verzonden. We nemen zo snel mogelijk contact met je op.
            </p>
            <div className={styles.foot}>
              <button type="button" className={styles.btnPrimary} onClick={onClose}>
                Sluiten
              </button>
            </div>
          </div>
        ) : (
          <form className={styles.body} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span className={styles.label}>Uw naam:</span>
              <input className={styles.input} type="text" name="naam" required autoFocus />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Uw email:</span>
              <input className={styles.input} type="email" name="email" required />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Bericht:</span>
              <textarea className={styles.textarea} name="bericht" rows={4} required />
            </label>

            <fieldset className={styles.fieldset}>
              <legend className={styles.label}>Dagen:</legend>
              <div className={styles.checks}>
                {dagen.map((dag) => (
                  <label key={dag} className={styles.check}>
                    <input type="checkbox" name="dagen" value={dag} />
                    {dag}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className={styles.field}>
              <span className={styles.label}>Vermoedelijke startdatum:</span>
              <input className={styles.input} type="date" name="startdatum" />
            </label>

            {status === 'error' && (
              <p className={styles.error}>
                Er ging iets mis bij het verzenden. Controleer je verbinding of mail ons rechtstreeks.
              </p>
            )}

            <div className={styles.foot}>
              <button type="button" className={styles.btnSecondary} onClick={onClose}>
                Sluiten
              </button>
              <button type="submit" className={styles.btnPrimary} disabled={status === 'sending'}>
                {status === 'sending' ? 'Versturen…' : 'Verstuur'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactModal
