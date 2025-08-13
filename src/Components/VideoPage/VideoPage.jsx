import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './VideoPage.module.css'
import Burger from '../../assets/icons/burger.png'
import Close from '../../assets/icons/close.png'
import playLogo from '../../assets/icons/playLogo.svg'

const video_preview_urls = [
    {
        id: 'vct-pacific',
        video_prev : "src/assets/videoPreview/riot.png",
        video_url: "https://player.vimeo.com/video/1108432715?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        video_heading: "VCT Pacific Trophy",
        video_text: "Video Editor",
        hasVideo: true
    },
    {
        id: 'koru-pharma',
        video_prev: "src/assets/videoPreview/koru.png",
        video_url: "https://www.youtube.com/embed/gp0TV-b1XaM?si=GT0yKfr2Xa8H8OK_",
        video_heading: "Koru Pharma",
        video_text: "Video Director / Video Editor",
        hasVideo: true
    },
    {
        id: 'bmw-racing',
        video_prev: "src/assets/videoPreview/car.png",
        video_url: "https://www.youtube.com/watch?v=89BG9hEGI04&ab_channel=VALORANTEsportsSouthAsia",
        video_heading: "BMW Racing",
        video_text: "Video Director / Video Editor",
        hasVideo: false
    }
]

const VideoCard = ({ video_prev, video_heading, video_text, hasVideo, onClick }) => {
    const heading = video_heading.split('\n').map((item, i) => {
        return (
            <p className={styles.videoHeading} key={i}>{item}</p>
        )
    })
    const text = video_text.split('\n').map((item, i) => {
        return (
            <p className={styles.videoText} key={i}>{item}</p>
        )
    })

    return (
        <div 
            className={`${styles.video} ${hasVideo ? styles.clickable : ''}`}
            onClick={onClick}
        >
            <div className={styles.videoContent} style={{
                backgroundImage: `url(${video_prev})`,
            }}>
                {hasVideo && (
                    <div className={styles.playOverlay}>
                        <img src={playLogo} alt="Play" />
                    </div>
                )}
                <div className={styles.description}>
                    {heading}
                    {text}
                </div>
            </div>
        </div>
    )
}

const ReelCard = ({ video_prev, video_heading, video_text, hasVideo, onClick }) => {
    const heading = video_heading.split('\n').map((item, i) => {
        return (
            <p className={styles.videoHeading} key={i}>{item}</p>
        )
    })
    const text = video_text.split('\n').map((item, i) => {
        return (
            <p className={styles.videoText} key={i}>{item}</p>
        )
    })

    return (
        <div 
            className={`${styles.reelCard} ${hasVideo ? styles.clickable : ''}`}
            onClick={onClick}
        >
            <div className={styles.reelContent} style={{
                backgroundImage: `url(${video_prev})`,
            }}>
                {hasVideo && (
                    <div className={styles.playOverlay}>
                        <img src={playLogo} alt="Play" />
                    </div>
                )}
                <div className={styles.description}>
                    {heading}
                    {text}
                </div>
            </div>
        </div>
    )
}

const VideoModal = ({ video, onClose }) => {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    return (
        <div 
            className={styles.videoModalOverlay}
            onClick={handleBackdropClick}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
        >
            <div className={styles.videoModalContent}>
                <button 
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close video"
                >
                    ×
                </button>
                <h2 id="video-modal-title" className={styles.videoModalTitle}>
                    {video.video_heading}
                </h2>
                <div className={styles.videoWrapper}>
                    <iframe 
                        src={video.video_url}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title={video.video_heading}
                    />
                </div>
            </div>
        </div>
    );
};

const VideosComponent = ({ onVideoClick }) => {
    return (
        <div className={styles.videoComponent}>
            {video_preview_urls.map((video) => (
                <VideoCard 
                    key={video.id}
                    {...video} 
                    onClick={() => onVideoClick(video)}
                />
            ))}
        </div>
    )
}

const ReelsComponent = ({ onVideoClick }) => {
    return (
        <div className={styles.reelsComponent}>
            {video_preview_urls.map((video) => (
                <ReelCard 
                    key={video.id}
                    {...video} 
                    onClick={() => onVideoClick(video)}
                />
            ))}
        </div>
    )
}

const VideoPage = () => {
    const [isActive, setIsActive] = useState('videos');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleMenuClick = (menu) => {
        setIsActive(menu);
    };

    const handleVideoClick = (video) => {
        if (video.hasVideo) {
            setSelectedVideo(video);
        }
    };

    const closeVideo = () => {
        setSelectedVideo(null);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <div className={styles.shadowBox}></div>
                <h1>VIDEO PROJECTS</h1>
                <div 
                    className={styles.burger} 
                    onClick={toggleMenu}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            toggleMenu();
                        }
                    }}
                >
                    <img src={Burger} alt="Burger menu" />
                </div>
            </div>
            
            <nav className={styles.subMenu} role="tablist">
                <button 
                    className={`${styles.tabButton} ${isActive === 'videos' ? styles.active : ''}`}
                    onClick={() => handleMenuClick('videos')}
                    role="tab"
                    aria-selected={isActive === 'videos'}
                >
                    videos
                </button>
                <button 
                    className={`${styles.tabButton} ${isActive === 'reels' ? styles.active : ''}`}
                    onClick={() => handleMenuClick('reels')}
                    role="tab"
                    aria-selected={isActive === 'reels'}
                >
                    reels
                </button>
            </nav>
            
            <main className={styles.mainContent}>
                {isActive === 'videos' && (
                    <VideosComponent onVideoClick={handleVideoClick} />
                )}
                {isActive === 'reels' && (
                    <ReelsComponent onVideoClick={handleVideoClick} />
                )}
            </main>

            {/* Video Modal */}
            {selectedVideo && (
                <VideoModal video={selectedVideo} onClose={closeVideo} />
            )}

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
    )
}

export default VideoPage