import React, {useRef} from 'react'
import styles from './About.module.css'
import { motion, useInView } from 'framer-motion'

import border from '../../../assets/icons/border.png'

const About = () => {

  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className={styles.aboutSection}>
        <motion.div 
          className={styles.descContainer} 
          ref={ref} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'} 
          variants={containerVariants}
        >
            <motion.div className={styles.title} variants={itemVariants}>
              <h2>
                about me.
              </h2>
            </motion.div>
            <motion.div className={styles.description} variants={itemVariants}>
                <p>My name is Marina Ni. I'm videographer, motion designer, film director and video editor.</p>
                <p>My passion, it to make everything look cinematic. Everything around us is a cinema and every life and story worth being remembered.</p>
            </motion.div>
            <motion.div className={styles.experience} variants={itemVariants}>
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
              
            </motion.div>
        </motion.div>
    </div>
  )
}

export default About