import React from 'react'

import styles from './ReviewsSection.module.css'

const inputContent = [
  {
    name: "Koru Pharma",
    content: "I couldn't be happier with this purchase! From the moment I received it, I could tell that a lot of thought had gone into the design and craftsmanship. The material feels premium, and the attention to detail is evident in every aspect. Not only does it function perfectly, but it also adds a touch of elegance to my space. The ordering process was seamless, and the delivery was quicker than expected. Customer service was also incredibly responsive, addressing my questions right away. Overall, a fantastic experience—I will definitely be coming back for more!"
  }, {
    name: "Koru Pharma",
    content: "I couldn't be happier with this purchase! From the moment I received it, I could tell that a lot of thought had gone into the design and craftsmanship. The material feels premium, and the attention to detail is evident in every aspect. Not only does it function perfectly, but it also adds a touch of elegance to my space. The ordering process was seamless, and the delivery was quicker than expected. Customer service was also incredibly responsive, addressing my questions right away. Overall, a fantastic experience—I will definitely be coming back for more!"
  }, {
    name: "Koru Pharma",
    content: "I couldn't be happier with this purchase! From the moment I received it, I could tell that a lot of thought had gone into the design and craftsmanship. The material feels premium, and the attention to detail is evident in every aspect. Not only does it function perfectly, but it also adds a touch of elegance to my space. The ordering process was seamless, and the delivery was quicker than expected. Customer service was also incredibly responsive, addressing my questions right away. Overall, a fantastic experience—I will definitely be coming back for more!"
  }, {
    name: "Koru Pharma",
    content: "I couldn't be happier with this purchase! From the moment I received it, I could tell that a lot of thought had gone into the design and craftsmanship. The material feels premium, and the attention to detail is evident in every aspect. Not only does it function perfectly, but it also adds a touch of elegance to my space. The ordering process was seamless, and the delivery was quicker than expected. Customer service was also incredibly responsive, addressing my questions right away. Overall, a fantastic experience—I will definitely be coming back for more!"
  }, {
    name: "Koru Pharma",
    content: "I couldn't be happier with this purchase! From the moment I received it, I could tell that a lot of thought had gone into the design and craftsmanship. The material feels premium, and the attention to detail is evident in every aspect. Not only does it function perfectly, but it also adds a touch of elegance to my space. The ordering process was seamless, and the delivery was quicker than expected. Customer service was also incredibly responsive, addressing my questions right away. Overall, a fantastic experience—I will definitely be coming back for more!"
  },
]

const ContentCard = ({name, content}) => {
  return (
    <>
      <div className={styles.contentCard}>
        <h3>{name}</h3>
        <p>{content}</p>
      </div>
    </>
  )
}

const ReviewsSection = () => {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.title}>
        <h2>reviews.</h2>
      </div>
      <div className={styles.reviewContent}>
        {inputContent.map((c) => {
          return <ContentCard name={c.name} content={c.content} />
        })}
      </div>
    </div>
  )
}

export default ReviewsSection