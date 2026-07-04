import styles from './App.module.css'

import { Navigation } from './components/sections/Navigation'
import { Home } from './components/sections/Home'
import { Vision } from './components/sections/Vision'
import { AlgemeneInfo } from './components/sections/AlgemeneInfo'
import { About } from './components/sections/About'
import { Gallery } from './components/sections/Gallery'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'

const App = () => {
  return (
    <div className={styles.app}>
      <Navigation />
      <main>
        <section id="home" className={styles.section}>
          <Home />
        </section>
        <section id="vision" className={styles.section}>
          <Vision />
        </section>
        <section id="info" className={styles.section}>
          <AlgemeneInfo />
        </section>        
        <section id="gallery" className={styles.section}>
          <Gallery />
        </section>
        <section id="about" className={styles.section}>
          <About />
        </section>
        <section id="contact" className={styles.section}>
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App
