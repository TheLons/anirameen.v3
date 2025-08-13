import React, { useState } from 'react'

import styles from './AwardsSection.module.css'

import { awardsData } from './awardsData'
import AwardItem from './AwardItem'

const AwardsSection = () => {
  const [activeId, setActiveId] = useState('tokyo')

  return (
    <section className={styles.awardsContainer} aria-labelledby="awards-title">
      <div className={styles.title}>
        <h2 id="awards-title">awards.</h2>
      </div>
      <div className={styles.awardsContent} role="list" aria-label="Awards list">
        {awardsData.map((award) => (
          <AwardItem
            key={award.id}
            award={award}
            isActive={activeId === award.id}
            onActivate={setActiveId}
          />
        ))}
      </div>
    </section>
  )
}

export default AwardsSection