import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PhotoPage.module.css';
import Burger from '../../assets/icons/burger.png';
import Close from '../../assets/icons/close.png';

import Horizontal_1 from '../../assets/photo/horizontal_1.png';
import Horizontal_2 from '../../assets/photo/horizontal_2.png';
import Vertical_1 from '../../assets/photo/vertical_1.png';
import Vertical_2 from '../../assets/photo/vertical_2.png';
import Vertical_3 from '../../assets/photo/vertical_3.png';
import Vertical_4 from '../../assets/photo/vertical_4.png';

const galleryImages = {
    people: [
        Horizontal_1,
        Horizontal_2,
        Vertical_1,
        Vertical_2,
        Vertical_3,
        Vertical_4, 
    ],
    products: [
        Horizontal_1,
        Horizontal_2,
        Vertical_1,
        Vertical_2,
        Vertical_3,
        Vertical_4, 
    ]
};

const PhotoPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('products');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <div className={styles.bannerOverlay}></div>
                <h1 className={styles.galleryTitle}>GALLERY</h1>
                <div 
                    className={styles.burger} 
                    onClick={toggleMenu}
                    role="button"
                    tabIndex={0}
                >
                    <img src={Burger} alt="Burger menu" />
                </div>
            </div>
            <ul className={styles.subMenu}>
                <li 
                    className={activeTab === 'people' ? styles.active : ''}
                    onClick={() => setActiveTab('people')}
                >
                    people
                </li>
                <li 
                    className={activeTab === 'products' ? styles.active : ''}
                    onClick={() => setActiveTab('products')}
                >
                    products
                </li>
            </ul>
            <div className={styles.galleryGrid}>
                {galleryImages[activeTab].map((img, idx) => (
                    <div className={styles.galleryItem} key={idx}>
                        <img src={img} alt={activeTab + ' ' + (idx+1)} />
                    </div>
                ))}
            </div>
            {/* Overlay Menu */}
            <div className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`}>
                <div className={styles.closeButton} onClick={toggleMenu}>
                    <img src={Close} alt="Close menu" />
                </div>
                <nav className={styles.overlayLinks}>
                    <Link to="/" onClick={toggleMenu}>HOME</Link>
                    <Link to="/video" onClick={toggleMenu}>VIDEO</Link>
                    <Link to="/photo" onClick={toggleMenu}>PHOTO</Link>
                    <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
                </nav>
            </div>
        </div>
    );
};

export default PhotoPage;
