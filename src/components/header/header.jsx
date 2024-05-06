import React from 'react'
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../../hooks/use-local-storage';
import i18n from '../../i18n';


import styles from "./header.module.css"
import logo from "../../image/logo.svg"
import Navbar from '../navbar/navbar';

const Header = () => {
    const {t} = useTranslation();
    const [language, setLanguage] = useLocalStorage("language", "ru");
    const [activeLanguage, setActiveLanguage] = React.useState(language);

    const changeToEnglish = () => {
        i18n.changeLanguage("en");
        setLanguage("en");
        setActiveLanguage("en");
    }

    const changeToRussian = () => {
        i18n.changeLanguage("ru");
        setLanguage("ru");
        setActiveLanguage("ru");
    }

    console.log(activeLanguage)
  return (
    <div className="container">
        <div className={styles.header}>
            <img src={logo} alt='logo'/>
            <div className={styles.btns}>
                <button className={`${styles.btn} ${activeLanguage === "ru" ? styles.active : ""}`} onClick={ changeToRussian}>ru</button>
                <button className={`${styles.btn} ${activeLanguage === "en" ? styles.active : ""}`}  onClick={ changeToEnglish}>en</button>
            </div>
            <Navbar/>
        </div>
    </div>
  )
}

export default Header