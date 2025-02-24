import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import styles from './HeroSection.module.css'

import qrCode from '../../../assets/icons/qrCode.png'
import arrow from '../../../assets/icons/arrow.png'

const InfiniteUpDown = () => {
  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ y: 10, transition: {
        duration: 2, 
        ease: "easeInOut"
      }})
      await controls.start({ y: -10, transition: {
        duration: 2,
        ease: "easeInOut"
      }})
      sequence()
    }

    sequence()
  }, [controls])

  return (
    <motion.div className={styles.arrowMore} animate={controls}>
      <p>Scroll down</p>
      <img src={arrow} alt="Arrow down" />
    </motion.div>
  ) 
}

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      transition={{
        staggerChildren: 0.15,
      }}
      href={href}
      className={styles.headerLink}>
        <motion.div
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%" },
          }}
        >
          {children}
        </motion.div>
        <motion.div
          className={styles.headerLinkHovered}
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
          }}
        >
          {children}
        </motion.div>
    </motion.a>
  )
}

const HeroSection = () => {
  return (
    <>
    <section className={styles.heroSection}>
      <div className={styles.shadowBox}></div>
      <div className={styles.header}>
        <p><FlipLink href="#">ANIRAMEEN</FlipLink></p>
      </div>
      <header className={styles.headerMenu}>
        <ul>
          <li><FlipLink href="#">BIO,</FlipLink></li>
          <li><FlipLink href="#">WORKS,</FlipLink></li>
          <li><FlipLink href="#">GALLERY,</FlipLink></li>
          <li><FlipLink href="#">CONTACTS,</FlipLink></li>
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
          <img src={qrCode} alt="QR code" />
        </div>
      </div>
      <InfiniteUpDown />
    </section>
    </>
  )
}

export default HeroSection