import React from 'react'

import { useTranslation } from "react-i18next";

import Button from '../button/button'
import Input from '../input/input'

import logo from "../../image/logo.svg"
import styles from "./feedback.module.css"

const Feedback = () => {
  const {t} = useTranslation();
    
  return (
    <div className={styles.feedback}>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>{t("feedback_title")}</div>
                <div className={styles.subtitle}>{t("feedback_subtitle")}</div>
                <div className={styles.wrapperInputs}>
                    <Input name={t("form_name")}/>
                    <Input name="+7 (___) __-__-__"/>
                </div>
                <Button
                click={() => alert("Мы получили ваши данные. Скоро свяжемся с вами))")}
                text={t("feedback_btn")}
                classStyles={{
                    backgroundColor: "#fff",
                    border: "1px solid #fff",
                    color: "#000",
                    transition: "all .3s",
                }}
            />
            <div className={styles.agreement}>{t("agreement")}</div>
            </div>
            <img className={styles.logo} src={logo}/>
        </div>
        <div className={styles.effect}></div>
    </div>
  )
}

export default Feedback