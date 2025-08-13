import React, { useState } from 'react'
import styles from './ReviewsSection.module.css'
import { reviewsData } from './reviewsData'
import ReviewCard from './ReviewCard'
import ReviewModal from './ReviewModal'
import { useBodyLock } from '../../Utils/useBodyLock'

const ReviewsSection = () => {
  const [selectedReview, setSelectedReview] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useBodyLock(isModalOpen)

  const handleCardClick = (review) => {
    setSelectedReview(review)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedReview(null)
  }

  return (
    <section className={styles.reviewContainer} aria-labelledby="reviews-title">
      <div className={styles.title}>
        <h2 id="reviews-title">reviews.</h2>
      </div>
      <div className={styles.reviewContent} role="region" aria-label="Customer reviews">
        {reviewsData.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            onCardClick={handleCardClick}
          />
        ))}
      </div>

      <ReviewModal
        review={selectedReview}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default ReviewsSection