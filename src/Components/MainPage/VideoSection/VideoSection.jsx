import React from 'react'
import styles from './VideoSection.module.css'
import playLogo from '../../../assets/icons/playLogo.svg'

const VideoSection = () => {
    const video_preview_urls = [
        {
            video_prev : "src/assets/videoPreview/riot.png",
            video_url: "https://www.youtube.com/watch?v=89BG9hEGI04&ab_channel=VALORANTEsportsSouthAsia",
            video_text: "I was working as a video editor for this project for Riot Games while \n I was working in A1 studios back in 2024. "
        },
        {
            video_prev: "src/assets/videoPreview/koru.png",
            video_url: "https://www.youtube.com/watch?v=89BG9hEGI04&ab_channel=VALORANTEsportsSouthAsia",
            video_text: "I was working as a video editor for this project for Riot Games while \n I was working in A1 studios back in 2024. "
        },
        {
            video_prev: "src/assets/videoPreview/car.png",
            video_url: "https://www.youtube.com/watch?v=89BG9hEGI04&ab_channel=VALORANTEsportsSouthAsia",
            video_text: "I was working as a video editor for this project for Riot Games while \n I was working in A1 studios back in 2024. "
        }
    ]

    const video_preview = video_preview_urls.map(video => <VideoCard 
            video_prev={video.video_prev}
            video_url={video.video_url}
            video_text={video.video_text}
        />)

    return (
        <div className={styles.videoSection}>
            {video_preview}
        </div>
    )
}

const VideoCard = ({ video_prev, video_url, video_text }) => {
    const text = video_text.split('\n').map((item, i) => {
        return (
            <p key={i}>{item}</p>
        )
    })

    return (
        <div className={styles.video} style={{backgroundImage: `url(${video_prev})`}}>
            <div className={styles.playLogo}>
                <img src={playLogo} />
            </div>
            <div className={styles.description}>
                {text}
            </div>
        </div>
    )
}

export default VideoSection