import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./cost.module.css";
import Services from "../services/services";
import BagServices from "../bag-services/bag-services";

const Cost = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.cost}>

    <div className={styles.wrapperSubtitle}>
      <div>{t("price_subtitle_one")}</div>
      <div className={styles.col}>
        <div className={styles.text}>{t("price_text")}</div>
        <div className={styles.services}>
          <Services />
        </div>
      </div>
      </div>

      <div className={styles.bag}>
        <hr
          style={{
            width: "100%",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        />
        <div className={styles.wrapperSubtitle}>
          <div>{t("price_subtitle_two")}</div>
          <div></div>
        </div>
        <BagServices />
      </div>
    </div>
  );
};

export default Cost;
