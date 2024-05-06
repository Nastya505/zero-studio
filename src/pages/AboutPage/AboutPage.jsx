import React from 'react'
import { useTranslation } from "react-i18next";
import styles from "./AboutPage.module.css"

import img from "../../image/about-img.png"
import CardsTeam from '../../components/cardTeam/cardsTeam';
import Feedback from '../../components/feedback/feedback';
const AboutPage = () => {
    const { t } = useTranslation();
  return (
<>
   <div className='container'>
    <div className={styles.block}>
        <div className={styles.mainTitle}>{t("studio_title_main")}</div>
      <hr style={{width:"100%", border: "1px solid rgba(255, 255, 255, 0.1)" }} />
        <div className={styles.wrapperSubtitle}>
            <div>{t("studio_subtitle_main")}</div>
            <div>{t("studio_text_main")}</div>
        </div>
    </div>

    <img className={styles.photo} src={img}/>

    <div className={styles.block}>
        <div className={styles.title}>{t("studio_title_one")}</div>
      <hr style={{width:"100%", border: "1px solid rgba(255, 255, 255, 0.1)" }} />

        <div className={styles.wrapperSubtitle}>
            <div>{t("studio_subtitle_one")}</div>
            <div>{t("studio_text_one")}</div>
        </div>
        <CardsTeam/>
    </div>

    <div className={styles.block}>
        <div className={styles.title}>{t("studio_title_two")}</div>
      <hr style={{width:"100%", border: "1px solid rgba(255, 255, 255, 0.1)" }} />

        <div className={styles.wrapperSubtitle}>
            <div>{t("studio_subtitle_two")}</div>
            <div>{t("studio_text_two")}</div>
        </div>
    </div>

   </div>

   <Feedback/>
</>
  )
}

export default AboutPage