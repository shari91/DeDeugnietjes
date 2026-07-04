import styles from './About.module.css'

import ilse from '../../../images/ilse.jpg'
import nancy from '../../../images/nancy.jpg'
import nathalie from '../../../images/nathalie.jpg'

const team = [
  { name: 'Ilse Maes', photo: ilse },
  { name: 'Nancy Blockx', photo: nancy },
  { name: 'Nathalie Ver Bruggen', photo: nathalie },
]

const About = () => {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.header}>Ons team</h2>
        <p className={styles.paragraph}>
          KDV De Deugnietjes staat onder toezicht van Kind &amp; Gezin. Hierdoor is de basiskwaliteit
          inzake hygiëne, veiligheid en pedagogische begeleiding gewaarborgd. De dagelijkse verzorging
          van uw kind is in handen van: Ilse Maes, Nancy Blockx en Nathalie Ver Bruggen.
        </p>
        <div className={styles.team}>
          {team.map((member) => (
            <figure key={member.name} className={styles.card}>
              <img className={styles.avatar} src={member.photo} alt={member.name} />
              <figcaption className={styles.name}>{member.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
