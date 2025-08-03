import React from 'react'

import styles from './ContactSection.module.css'

import Avatar from '../../../assets/contacts/avatar.png'

const ContactSection = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.container}>
                <div className={styles.description}>
                    <div className={styles.title}>
                        <h2>Have an idea?</h2>
                        <h3>Let's get in touch</h3>
                    </div>
                    <form className={styles.form} action="">
                        <label className={styles.name} htmlFor="">
                            <p>Name</p>
                            <input type="text" placeholder="Name" />
                        </label>
                        <label className={styles.email} htmlFor="">
                            <p>Email</p>
                            <input type="email" placeholder="Email" />
                        </label>
                        <label className={styles.message} htmlFor="">
                            <p>Message</p>
                            <textarea type="text" placeholder="Message" />
                        </label>
                    </form>
                </div>
                <div className={styles.photo}>
                    <img src={Avatar} alt="Avatar photo" />
                </div>
            </div>
        </div>
    )
}

export default ContactSection