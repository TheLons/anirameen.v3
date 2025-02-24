import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.aboutSection}>
        <div className={styles.descContainer}>
            <h2>Who am I?</h2>
            <div className={styles.description}>
                <p>My name is Marina Ni. I’m videographer, motion designer, film director and video editor.</p>
                <p>My passion, it to make everything look cinematic. Everything around us </p>
                <p>is a cinema and every life and story worth</p>
                <p>being remembered.</p>
            </div>
        </div>
    </div>
  )
}

export default About