import React from 'react'

import styles from './PartnerSection.module.css'

import logoCoreA from '../../../assets/partnerLogo/coreA.png'
import koruPharma from '../../../assets/partnerLogo/koruPharma.png'
import kworldMedia from '../../../assets/partnerLogo/kworldMedia.png'
import riotGames from '../../../assets/partnerLogo/riotGames.png'

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
  console.log(partners)
  return (
    <div className={styles.partnerContainer}>
      <div className={styles.title}>
        <h2>partners.</h2>
      </div>
      <div className={styles.partners}>
        {partners.map((partner) => {
          return <PartnerCard logo={partner} />
        })}
      </div>
    </div>
  )
}

export default PartnerSection;