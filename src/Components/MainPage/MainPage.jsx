import styles from './MainPage.module.css'

import HeroSection from './HeroSection/HeroSection';
import About from './AboutSection/About';
import VideoSection from './VideoSection/VideoSection';
import PhotoSection from './PhotoSection/PhotoSection';
import PartnerSection from './PartnerSection/PartnerSection';
import ReviewsSection from './PartnerSection/ReviewsSection';
import AwardsSection from './AwardsSection/AwardsSection';
import ContactSection from './ContactSection/ContactSection';

import { motion, useScroll, useTransform } from "framer-motion"

const SECTION_HEIGHT = 1500;

const MainPage = () => {
    const { scrollY } = useScroll();

    const opacity = useTransform(scrollY, [0, SECTION_HEIGHT], [1, 0]);
    const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT], ["100%", "60%"]);

    return (
        <div className={styles.global}>
            <motion.div
                style={{
                    opacity,
                    backgroundSize,
                }}
            >
                <HeroSection />
            </motion.div>
            <About />
            <VideoSection />
            <PhotoSection />
            <PartnerSection />
            <ReviewsSection />
            <AwardsSection />
            <ContactSection />
        </div>
    )
}

export default MainPage;