import React from 'react'
import styles from './About.module.css'

import border from '../../../assets/icons/border.png'

const About = () => {
  return (
    <div className={styles.aboutSection}>
        <div className={styles.descContainer}>
            <img id={styles.topLeft} src={border} alt="Top left border" />
            <img id={styles.topRight} src={border} alt="Top right border" />
            <img id={styles.bottomRight} src={border} alt="Bottom right border" />
            <img id={styles.bottomLeft} src={border} alt="Bottom left border" />
            <div className={styles.title}>
              <h2>Who am I?</h2>
            </div>
            <div className={styles.description}>
                <p>My name is Marina Ni. I’m videographer, motion designer, film director and video editor.</p>
                <p>My passion, it to make everything look cinematic. Everything around us is a cinema and every life and story worth being remembered.</p>
            </div>
            <div className={styles.experience}>
              <p>3+ years of experience in photography</p>
              <p>7+ years of experience in video editing</p>
              <p>6+ years of experience in video shooting</p>
            </div>
        </div>
    </div>
  )
}

export default About