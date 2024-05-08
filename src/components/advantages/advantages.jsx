import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./advantages.module.css";
import Button from "../button/button";
import CardАdvantages from "../cardАdvantages/cardАdvantages";
const Advantages = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.feedback}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>{t("text_about_studio")}</div>
          <Button
            click={() => console.log("studio")}
            text={t("btn_studio")}
            classStyles={{
              backgroundColor: "#fff",
              border: "1px solid #fff",
              color: "#000",
              transition: "all .3s",
            }}
          />
        </div>
      </div>
      <div className="container">
        <div className={styles.cards}>
          <CardАdvantages
            title={t("advantages_title_1")}
            text={t("advantages_text_1")}
          />
          <CardАdvantages
            title={t("advantages_title_2")}
            text={t("advantages_text_2")}
          />
          <CardАdvantages
            title={t("advantages_title_3")}
            text={t("advantages_text_3")}
          />
          <CardАdvantages
            title={t("advantages_title_4")}
            text={t("advantages_text_4")}
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
