import React from 'react'
import styles from './About.module.css'

import border from '../../../assets/icons/border.png'

const About = () => {
  return (
    <div className={styles.aboutSection}>
        <div className={styles.descContainer}>
            <div className={styles.title}>
              <h2>about me.</h2>
            </div>
            <div className={styles.description}>
                <p>My name is Marina Ni. I’m videographer, motion designer, film director and video editor.</p>
                <p>My passion, it to make everything look cinematic. Everything around us is a cinema and every life and story worth being remembered.</p>
            </div>
            <div className={styles.experience}>
              <div className={styles.experience_container}>
                <p className={styles.years}>3+</p>
                <p>years of experience in photography</p>
              </div>
              <div className={styles.experience_container}>
                <p className={styles.years}>7+</p>
                <p>years of experience in video editing</p>
              </div>
              <div className={styles.experience_container}>
                <p className={styles.years}>6+</p>
                <p>years of experience in video shooting</p>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default About