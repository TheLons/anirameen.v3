import React, { useRef } from 'react'
import styles from './PartnerSection.module.css'
import { motion, useInView } from 'framer-motion'

import logoCoreA from '../../../assets/partnerLogo/coreA.png'
import koruPharma from '../../../assets/partnerLogo/koruPharma.png'
import kworldMedia from '../../../assets/partnerLogo/kworldMedia.png'
import riotGames from '../../../assets/partnerLogo/riotGames.png'
import agaskin from '../../../assets/partnerLogo/agaskin.png'
import kahi from '../../../assets/partnerLogo/kahi.png'
import vbi from '../../../assets/partnerLogo/vbi.png'

const partners = [
  [
    { id: 0, logo: logoCoreA },
    { id: 1, logo: koruPharma },
    { id: 2, logo: kworldMedia },
    { id: 3, logo: riotGames },
  ],
  [
    { id: 4, logo: agaskin },
    { id: 5, logo: kahi },
    { id: 6, logo: vbi },
  ]
];

const PartnerCard = ({ logo, alt }) => (
  <motion.div 
    className={styles.card}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <img src={logo} alt={alt} />
  </motion.div>
);

const PartnerSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const containerVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className={styles.partnerContainer}>
      <motion.div 
        className={styles.partnerContent}
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div 
          className={styles.title} 
          variants={itemVariants}
        >
          <h2>partners.</h2>
        </motion.div>
        <motion.div 
          className={styles.partners}
          variants={itemVariants}
        >
          {partners.map((row, rowIdx) => (
            <div className={styles.partnersInside} key={rowIdx}>
              {row.map((partner) => (
                <PartnerCard key={partner.id} logo={partner.logo} alt="Logo of the company" />
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default PartnerSection;