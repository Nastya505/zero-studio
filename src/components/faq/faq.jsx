import React from 'react'
import styles from "./faq.module.css"
import { useTranslation } from 'react-i18next'
import Accordion from '../accordion/accordion';

const Faq = () => {
    const {t} = useTranslation();

  return (
    <div className={styles.faq}>
         <div className="container">
            <div className={styles.title}>{t("faq_title")}</div>
            <div className={styles.wrapper}>
                <Accordion id="1" title={t("faq_questions_title_1")} text={t("faq_questions_text_1")}/>
                <Accordion id="2" title={t("faq_questions_title_2")} text={t("faq_questions_text_2")}/>
                <Accordion id="3" title={t("faq_questions_title_3")} text={t("faq_questions_text_3")}/>
                <Accordion id="4" title={t("faq_questions_title_4")} text={t("faq_questions_text_4")}/>
                <Accordion id="5" title={t("faq_questions_title_5")} text={t("faq_questions_text_5")}/>
            </div>
        </div>
    </div>
  )
}

export default Faq