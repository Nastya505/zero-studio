import React from 'react'
import styles from "./btn-language.module.css"
import useLocalStorage from '../../hooks/use-local-storage';
import BtnLanguage from './btn-language'

const BtnsLanguage = () => {
    const [language, setLanguage] = useLocalStorage("language", "ru");
    const [activeLanguage, setActiveLanguage] = React.useState(language);


  return (
    <div className={styles.btns}>
        <BtnLanguage lng={"ru"} actiiveLng={activeLanguage} setActiveLng={setActiveLanguage} setLanguage={setLanguage} />
        <BtnLanguage lng={"en"} actiiveLng={activeLanguage} setActiveLng={setActiveLanguage}  setLanguage={setLanguage}/>
    </div>
  )
}

export default BtnsLanguage