import React from 'react'
import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.shadowBox}></div>
      <div className={styles.header}>
        <p>ANIRAMEEN</p>
      </div>
      <header className={styles.headerMenu}>
        <ul>
          <li>BIO,</li>
          <li>WORKS,</li>
          <li>GALLERY,</li>
          <li>CONTACTS,</li>
        </ul>
      </header>
      <div className={styles.tagsContainer}>
        <div className={styles.tags}>
          <p>Adobe Premiere Pro</p>
          <p>Lumix GH5</p>
          <p>Adobe Photoshop</p>
          <p>Photo</p>
          <p>Video</p>
          <p>Cinema</p>
        </div>
        <div className={styles.qrCode}>

        </div>
      </div>
    </section>
  )
}

export default HeroSection