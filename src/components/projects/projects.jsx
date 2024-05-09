import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../button/button";

import styles from "./projects.module.css";
import CardsMusic from "../cardMusic/cardsMusic"

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.projects}>
      <div className={styles.wrapperSubtitle}>
        <div>{t("projects_subtitle")}</div>
        <div>{t("projects_text")}</div>
      </div>
      <CardsMusic />
      <div className={styles.wrapperBtn}>
        <Button
          click={() => alert("Вы успешно подписались на рассылку")}
          text={t("projects_btn")}
          classStyles={{
            backgroundColor: "#fff",
            border: "1px solid #fff",
            color: "#000",
            transition: "all .3s",
          }}
        />
      </div>
    </div>
  );
};

export default Projects;
