import React from 'react';
import i18n from '../../i18n';
import styles from "./btn-language.module.css";

const BtnLanguage = ({ lng, actiiveLng, setActiveLng, setLanguage }) => {


    const changeLanguage = (newLanguage) => {
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
        setActiveLng(newLanguage);
    };

    return (
        <button
            className={`${styles.btn} ${actiiveLng === lng ? styles.active : ""}`}
            onClick={() => changeLanguage(lng)}
        >
            {lng}
        </button>
    );
};

export default BtnLanguage;