import React from 'react'

import styles from './ContactSection.module.css'

import Avatar from '../../../assets/contacts/avatar.png'

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up submission or integrate with backend/email service
  }

  return (
    <section className={styles.contactContainer} aria-labelledby="contact-title">
      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.title}>
            <h2 id="contact-title">Have an idea?</h2>
            <h3>Let's get in touch</h3>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label className={styles.name} htmlFor="contact-name">
              <p>Name</p>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </label>

            <label className={styles.email} htmlFor="contact-email">
              <p>Email</p>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </label>

            <label className={styles.message} htmlFor="contact-message">
              <p>Message</p>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us a bit about your project..."
                required
              />
            </label>

            <div className={styles.submitRow}>
              <button type="submit" className={styles.submitBtn} aria-label="Send message">
                Send message
              </button>
            </div>
          </form>
        </div>

        <div className={styles.photo} aria-hidden>
          <img src={Avatar} alt="" />
        </div>
      </div>
    </section>
  )
}

export default ContactSection