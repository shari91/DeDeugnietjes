import styles from './Footer.module.css'

import opvang from '../../../images/OpvangVlaanderen.svg'
import opgroeien from '../../../images/opgroeienVlaanderen.png'
import huisvanhetkind from '../../../images/HuisVanHetKind.png'
import brandLogo from '../../../images/logo-web.png'

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <img className={styles.brand} src={brandLogo} alt="Kinderdagverblijf De Deugnietjes" />
        <div className={styles.logos}>
          <img className={styles.logo} src={opvang} alt="Opvang Vlaanderen" />
          <img className={styles.logo} src={opgroeien} alt="Opgroeien Vlaanderen" />
          <img className={styles.logo} src={huisvanhetkind} alt="Huis van het Kind" />
        </div>      
      </footer>
      <div className={styles.copyright}>© 2026 De Deugnietjes</div>
    </div>
  )
}

export default Footer
