import styles from './MainPage.module.css'

import HeroSection from './HeroSection/HeroSection';
import About from './AboutSection/About';
import VideoSection from './VideoSection/VideoSection';

const MainPage = () => {
    return (
        <div className={styles.global}>
            <HeroSection />
            <About />
            <VideoSection />
        </div>
    )
}

export default MainPage;