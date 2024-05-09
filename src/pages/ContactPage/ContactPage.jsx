import React from "react";
import { useTranslation } from "react-i18next";
import { useDisclosure } from '@mantine/hooks';

import MyMap from "../../components/map/map";
import Button from "../../components/button/button";
import ModalComponent from "../../components/modal/modal";

import icon1 from "../../image/youtube.svg"
import icon2 from "../../image/telegram.svg"
import icon3 from "../../image/twitch.svg"

import styles from "./ContactPage.module.css";
import MainTitleInPage from "../../components/title-in-page/main-title-in-page";

const ContactPage = () => {
  const { t } = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);
  
  return (
    <div className="container">
      <ModalComponent opened={opened} close={close}/>
      <MainTitleInPage title={t("contacts_title")}/>
      <div className={styles.wrapper}>
        <div className={styles.form}>
            <div>{t("contacts_subtitle")}</div>
            <Button
             click={open}
             text={t("btn_reservation")}
             classStyles={{
               backgroundColor: "#5125DB",
               border: "1px solid #5125DB",
               transition: "all .3s",
             }}/>
        </div>
        <div className={styles.contacts}>
          <div className={styles.col}>
            <div className={styles.row}>
              <span>{t("contacts_tag_1")}:</span>
              <span>{t("contacts_adresses")}</span>
            </div>
            <div className={styles.row}>
              <span>{t("contacts_tag_3")}:</span>
              <div className={styles.wrapperIcons}>
                <img src={icon2} />
                <img src={icon1} />
                <img src={icon3} />
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.row}>
              <span>{t("contacts_tag_2")}:</span>
              <span>zerostudio@yandex.ru</span>
            </div>
          </div>
        </div>
      </div>
      <MyMap />
    </div>
  );
};

export default ContactPage;
