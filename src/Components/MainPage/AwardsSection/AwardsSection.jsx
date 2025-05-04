import React, { useState } from 'react'

import styles from './AwardsSection.module.css'

import TokyoLogo from '../../../assets/awards/tokyo.png'
import ArrowLogo from '../../../assets/awards/arrow.png'
import AuraLogo from '../../../assets/awards/aura.png'
import EmeraldLogo from '../../../assets/awards/emerald.png'
import GoldenLogo from '../../../assets/awards/golden.png'
import TeebLogo from '../../../assets/awards/teeb.png'

const awardsContent = [
    {
        id: 'tokyo',
        logo: TokyoLogo,
        name: 'Tokyo International Short Film Festival',
        information: '2022 / Winner',
        description: 'Step into an evening of glamour, recognition, and inspiration at the Annual Excellence Awards Festival. This prestigious event brings together visionaries, creatives, and changemakers to honor outstanding achievements across a variety of fields. From captivating performances to heartfelt tributes, this night celebrates the brilliance and dedication that shape our world.',
    },
    {
        id: 'arrow',
        logo: ArrowLogo,
        name: 'Arrow International Film Festival',
        information: '2022 / Winner',
        description: 'Step into an evening of glamour, recognition, and inspiration at the Annual Excellence Awards Festival. This prestigious event brings together visionaries, creatives, and changemakers to honor outstanding achievements across a variety of fields. From captivating performances to heartfelt tributes, this night celebrates the brilliance and dedication that shape our world.',
    },
    {
        id: 'aura',
        logo: AuraLogo,
        name: 'AURA Film Festival',
        information: '2022 / Winner',
        description: 'Step into an evening of glamour, recognition, and inspiration at the Annual Excellence Awards Festival. This prestigious event brings together visionaries, creatives, and changemakers to honor outstanding achievements across a variety of fields. From captivating performances to heartfelt tributes, this night celebrates the brilliance and dedication that shape our world.',
    },
    {
        id: 'emerald',
        logo: EmeraldLogo,
        name: 'Emerald Peacock Honorable Mention',
        information: '2022 / Honorable Mention',
        description: 'Step into an evening of glamour, recognition, and inspiration at the Annual Excellence Awards Festival. This prestigious event brings together visionaries, creatives, and changemakers to honor outstanding achievements across a variety of fields. From captivating performances to heartfelt tributes, this night celebrates the brilliance and dedication that shape our world.',
    },
    {
        id: 'golden',
        logo: GoldenLogo,
        name: 'Golden Giraffe International Film Festival',
        information: '2022 / Official Selection',
        description: 'Step into an evening of glamour, recognition, and inspiration at the Annual Excellence Awards Festival. This prestigious event brings together visionaries, creatives, and changemakers to honor outstanding achievements across a variety of fields. From captivating performances to heartfelt tributes, this night celebrates the brilliance and dedication that shape our world.',
    },
    {
        id: 'teeb',
        logo: TeebLogo,
        name: 'Teeb TV Malaysia Mental Health Film Festival',
        information: '2022 / Official Selection',
        description: 'Step into an evening of glamour, recognition, and inspiration at the Annual Excellence Awards Festival. This prestigious event brings together visionaries, creatives, and changemakers to honor outstanding achievements across a variety of fields. From captivating performances to heartfelt tributes, this night celebrates the brilliance and dedication that shape our world.',
    },
]

const Award = ({id, logo, name, information, description, active, setActiveId}) => {
    return (
        <>
            <div 
                className={`${styles.award} ${active === id ? styles.active : ""}`}
                onMouseEnter={() => setActiveId(id)}
            >
                <div className={styles.preview}>
                    <div className={styles.previewMain}>
                        <div className={styles.logoContainer}>
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className={styles.name}>
                            <h3>{name}</h3>
                        </div>
                    </div>
                    <div className={styles.information}>
                        <p>{information}</p>
                    </div>
                </div>
                <div className={styles.description}>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

const AwardsSection = () => {
    const [activeId, setActiveId] = useState('tokyo');

    return (
        <div className={styles.awardsContainer}>
            <div className={styles.title}>
                <h2>awards.</h2>
            </div>
            <div className={styles.awardsContent}>
                {awardsContent.map((content) => {
                    return (
                        <Award 
                            id={content.id} 
                            logo={content.logo} 
                            name={content.name} 
                            information={content.information} 
                            description={content.description} 
                            active={activeId} 
                            setActiveId={setActiveId}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default AwardsSection