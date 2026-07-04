import styles from './Vision.module.css'
import visiePhoto from '../../../images/web/visie.jpg'

const bulletPoints = [
  'De ruimte zo gezellig mogelijk inrichten met verschillende speelhoeken waarin elk kind zijn spel kan vinden.',
  'Een ruimte creëren waar kinderen zich kunnen uitleven.',
  'Een rustige plek scheppen waar een verhaal kan voorgelezen worden, waar geknuffeld en gesnoezeld kan worden.',
  'Elk kind heeft recht op pedagogische kwaliteit in ons kinderdagverblijf; zelfvertrouwen en zelfstandigheid.',
  'Sociale vaardigheid, creatieve-, motorische-, verstandelijke- en emotionele ontwikkeling.',
]

const Vision = () => {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.header}>Onze visie</h2>
          <div className={styles.paragraph}>
            Bij KDV De Deugnietjes staat de belevingswereld en het welbevinden van het kind centraal.
            Onze opvang is zodanig ingericht dat ze een huiselijke en vertrouwde omgeving aan de
            kinderen biedt. Dit betekent:
            <ul className={styles.list}>
              {bulletPoints.map((point, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.bullet} />
                  <span className={styles.listText}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.aside}>
          <img className={styles.photo} src={visiePhoto} alt="De speeltuin van De Deugnietjes" />
        </div>
      </div>
    </div>
  )
}

export default Vision
