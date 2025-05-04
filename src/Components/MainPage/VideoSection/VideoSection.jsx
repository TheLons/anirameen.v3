import React from 'react'
import styles from './VideoSection.module.css'
import playLogo from '../../../assets/icons/playLogo.svg'
import { p } from 'framer-motion/client'

import ArrowRight from '../../../assets/icons/arrowRight.png'

const VideoSection = () => {
    const video_preview_urls = [
        {
            video_prev : "src/assets/videoPreview/riot.png",
            video_url: "https://www.youtube.com/watch?v=89BG9hEGI04&ab_channel=VALORANTEsportsSouthAsia",
            video_heading: "VCT Pacific Trophy",
            video_text: "Video Editor"
        },
        {
            video_prev: "src/assets/videoPreview/koru.png",
            video_url: "https://www.youtube.com/watch?v=89BG9hEGI04&ab_channel=VALORANTEsportsSouthAsia",
            video_heading: "Koru Pharma",
            video_text: "Video Director / Video Editor"
        },
        {
            video_prev: "src/assets/videoPreview/car.png",
            video_url: "https://www.youtube.com/watch?v=89BG9hEGI04&ab_channel=VALORANTEsportsSouthAsia",
            video_heading: "BMW Racing",
            video_text: "Video Director / Video Editor"
        }
    ]

    return (
        <div className={styles.videoSection}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>video projects.</h2>
                </div>
                <div className={styles.videoContainer}>
                    {VideoCard(video_preview_urls[0])}
                    {VideoCard(video_preview_urls[1])}
                    {VideoCard(video_preview_urls[2])}
                    {VideoCard(video_preview_urls[2])}
                </div>
            </div>
            <a className={styles.showMore}>
                <p>Show more</p>
            </a>
        </div>
    )
}

const VideoCard = ({ video_prev, video_url, video_heading, video_text }) => {
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
        <div className={styles.video}>
            <div className={styles.videoContent} style={{
                backgroundImage: `url(${video_prev})`,
            }}>
                <div className={styles.description}>
                    {heading}
                    {text}
                </div>
            </div>
        </div>
    )
}

export default VideoSection