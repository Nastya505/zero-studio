import React from "react";
import { Menu } from "@mantine/core";
import { useTranslation } from "react-i18next";
import burger from "../../image/burger-menu.svg"

import styles from "./burger-menu.module.css";

const BurgerMenu = () => {
  const { t } = useTranslation();


  return (
    <div className={styles.burger}>
      <Menu width={200} shadow="lg">
        <Menu.Target>
        <img src={burger}/>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item component="a" className={styles.link} href="/">
            {t("title_home")}
          </Menu.Item>
          <Menu.Item component="a" className={styles.link} href="/about">
            {t("title_about")}
          </Menu.Item>
          <Menu.Item component="a" className={styles.link} href="/projects">
            {t("title_projects")}
          </Menu.Item>
          <Menu.Item component="a" className={styles.link} href="/cost">
            {t("title_cost")}
          </Menu.Item>
          <Menu.Item component="a" className={styles.link} href="/contact">
            {t("title_contacts")}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
