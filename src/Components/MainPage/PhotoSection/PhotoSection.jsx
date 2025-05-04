import React from 'react'
import styles from './PhotoSection.module.css'

import horizontal_1 from '../../../assets/photo/horizontal_1.png'
import horizontal_2 from '../../../assets/photo/horizontal_2.png'

import vertical_1 from '../../../assets/photo/vertical_1.png'
import vertical_2 from '../../../assets/photo/vertical_2.png'
import vertical_3 from '../../../assets/photo/vertical_3.png'
import vertical_4 from '../../../assets/photo/vertical_4.png'

const PhotoSection = () => {
  return (
    <div className={styles.photoSection}>
      <div className={styles.photoContent}>
        <div className={styles.title}>
          <h2>photo gallery.</h2>
        </div>
        <div className={styles.photoContainer}>
          <div className={styles.photoSubContainer}>
            <img className={styles.horizontalPhoto} src={horizontal_1} alt="Photo of a man" />
            <img className={styles.verticalPhoto} src={vertical_1} alt="Photo" />
            <img src={vertical_2} alt="Photo" />
          </div>
          <div className={styles.photoSubContainer}>
            <img className={styles.verticalPhoto} src={vertical_3} alt="Photo" />
            <img className={styles.verticalPhoto} src={vertical_4} alt="Photo" />
            <img className={styles.horizontalPhoto} src={horizontal_2} alt="Photo of a woman" />
          </div>
        </div>
        <a className={styles.showMore}>
            <p>Show more</p>
        </a>
      </div>
    </div>
  )
}

export default PhotoSection