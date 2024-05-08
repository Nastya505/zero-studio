import React from 'react'
import styles from "./bag-services.module.css"
import { useTranslation } from 'react-i18next'
import BagServicesItem from './bag-services-item';

const BagServices = () => {
  const {t}= useTranslation();
  return (
    <div className={styles.wrapper}>
        <BagServicesItem id="1" fresh title={t("price_packages_title_1")} text={t("price_packages_text_1")}  price={t("price_packages_money_1")} />
        <BagServicesItem id="2" title={t("price_packages_title_2")} text={t("price_packages_text_2")}  price={t("price_packages_money_2")} />
        <BagServicesItem id="3" title={t("price_packages_title_3")} text={t("price_packages_text_3")}  price={t("price_packages_money_3")} />
        <BagServicesItem id="4" title={t("price_packages_title_4")} text={t("price_packages_text_4")}  price={t("price_packages_money_4")} />
        <BagServicesItem id="5" title={t("price_packages_title_5")} text={t("price_packages_text_5")}  price={t("price_packages_money_5")} />
    </div>
  )
}

export default BagServices