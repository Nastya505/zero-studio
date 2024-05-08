import React from 'react'
import { useTranslation } from "react-i18next";
import styles from "./services.module.css"
import Service from './service'

const Services = () => {
    const { t } = useTranslation();
  return (
    <div className={styles.services}>
        <Service name={t("price_services_title_1")} price={t("price_services_money_1")} />
        <Service name={t("price_services_title_2")} price={t("price_services_money_2")} />
        <Service name={t("price_services_title_3")} price={t("price_services_money_3")} />
        <Service name={t("price_services_title_4")} price={t("price_services_money_4")} />
        <Service name={t("price_services_title_5")} price={t("price_services_money_5")} />

    </div>
  )
}

export default Services