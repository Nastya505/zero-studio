import React from "react";
import title from "../../image/title.svg";
import { useTranslation } from "react-i18next";
import Button from "../../components/button/button";
import photo from "../../image/hero.png";

import styles from "./HomePage.module.css";

import ModalComponent from "../../components/modal/modal";
import { useDisclosure } from '@mantine/hooks';
import Feedback from "../../components/feedback/feedback";


const HomePage = () => {
  const { t } = useTranslation();

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ModalComponent opened={opened} close={close}/>
      <div className="container">
        <div className={styles.hero}>
          <img src={title} />
          <p>{t("subtitle")}</p>
          <div className={styles.btnWrapper}>
            <Button
              click={open}
              text={t("btn_reservation")}
              classStyles={{
                backgroundColor: "#5125DB",
                border: "1px solid #5125DB",
                transition: "all .3s",
              }}
            />
            <Button
              click={() => console.log("know")}
              text={t("btn_know")}
              classStyles={{
                backgroundColor: "#090110",
                transition: "all .3s",
                border: "1px solid #fff",
              }}
            />
          </div>
          <img className={styles.photo} src={photo} />
        </div>
      </div>
      <div></div>

      <Feedback/>
    </>
  );
};

export default HomePage;
