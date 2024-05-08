import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../button/button";
import { Link } from "react-router-dom";
import Input from "../input/input";
import styles from "./footer.module.css";

import icon1 from "../../image/youtube.svg";
import icon2 from "../../image/telegram.svg";
import icon3 from "../../image/twitch.svg";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.form}>
            <div>{t("footer_form_title")}</div>
            <Input name={t("footer_form_email")} textAling="left" />
            <Button
              click={() => alert("Вы успешно подписались на рассылку")}
              text={t("footer_btn")}
              classStyles={{
                backgroundColor: "#fff",
                border: "1px solid #fff",
                color: "#000",
                transition: "all .3s",
              }}
            />
            <div className={styles.agreement}>{t("agreement")}</div>
          </div>
          <div className={styles.contacts}>
            <div className={styles.col}>
              <div className={styles.row}>
                <span>{t("contacts_tag_1")}:</span>
                <span>{t("contacts_adresses")}</span>
              </div>
              <div className={styles.row}>
                <span>{t("tag")}:</span>
                <div className={styles.nav}>
                    <Link className={styles.link} to="/">
                    {t("title_home")}
                    </Link>
                    <Link className={styles.link} to="/about">
                    {t("title_about")}
                    </Link>
                    <Link className={styles.link} to="/projects">
                    {t("title_projects")}
                    </Link>
                    <Link className={styles.link} to="/cost">
                    {t("title_cost")}
                    </Link>
                    <Link className={styles.link} to="/contact">
                    {t("title_contacts")}
                    </Link>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.row}>
                <span>{t("contacts_tag_2")}:</span>
                <span>zerostudio@yandex.ru</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
