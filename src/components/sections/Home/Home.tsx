import styles from './Home.module.css'
import banner from '../../../images/web/g4.jpg'

const Home = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.image} src={banner} alt="De Deugnietjes" />
      <p className={styles.quote}>
        Waar ondeugende glimlachjes en
        <br />
        warme zorgen hand in hand gaan.
      </p>
    </div>
  )
}

export default Home
