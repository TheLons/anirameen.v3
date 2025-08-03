import React, {useEffect, useRef, useState} from 'react'

import styles from './PartnerSection.module.css'

import logoCoreA from '../../../assets/partnerLogo/coreA.png'
import koruPharma from '../../../assets/partnerLogo/koruPharma.png'
import kworldMedia from '../../../assets/partnerLogo/kworldMedia.png'
import riotGames from '../../../assets/partnerLogo/riotGames.png'
import agaskin from '../../../assets/partnerLogo/agaskin.png'
import kahi from '../../../assets/partnerLogo/kahi.png'
import vbi from '../../../assets/partnerLogo/vbi.png'

const partners = [
  {
    id: 0,
    logo: logoCoreA,
  }, {
    id: 1,
    logo: koruPharma,
  }, {
    id: 2,
    logo: kworldMedia,
  }, {
    id: 3,
     logo: riotGames,
  }
] 

const partners2 = [
  {
    id: 4,
    logo: agaskin,
  }, {
    id: 5,
    logo: kahi,
  }, {
    id: 6,
    logo: vbi,
  },
]
const PartnerCard = ({ logo }) => {
  console.log(logo);
  return (
    <>
      <div className={styles.card}>
        <img src={logo.logo} alt="Logo of the company" />
      </div>
    </>
  )
}

const PartnerSection = () => {
  
  return (
    <div className={styles.partnerContainer}>
      <div className={styles.title}>
        <h2>partners.</h2>
      </div>
      <div className={styles.partners}>
        <div className={styles.partnersInside}>
          {partners.map((partner) => {
            return <PartnerCard logo={partner} />
          })}
        </div>
        <div className={styles.partnersInside}>
          {partners2.map((partner) => {
            return <PartnerCard logo={partner} />
          })}
        </div>
      </div>
    </div>
  )
}

export default PartnerSection;