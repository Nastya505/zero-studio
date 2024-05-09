import React from 'react'
import { Menu } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import burgerMenu from "../../image/burger-menu.svg"

import styles from "./burger-menu.module.css"
import BtnsLanguage from '../btn-language/btns-language';

const BurgerMenu = () => {
    const {t} = useTranslation();

  return (
    <div className={styles.burger}>
        <Menu width={200} shadow="md">
        <Menu.Target>
        <img src={burgerMenu} />
        </Menu.Target>

        <Menu.Dropdown>
            <Menu.Item>
                <Link className={styles.link} to="/">{t("title_home")}</Link> 
            </Menu.Item>
            <Menu.Item>
            <Link className={styles.link} to="/about">{t("title_about")}</Link> 
            </Menu.Item>
            <Menu.Item>
            <Link className={styles.link} to="/projects">{t("title_projects")}</Link> 
            </Menu.Item>
            <Menu.Item>
            <Link className={styles.link} to="/cost">{t("title_cost")}</Link> 
            </Menu.Item>
            <Menu.Item>
            <Link className={styles.link} to="/contact">{t("title_contacts")}</Link>
            </Menu.Item>
        </Menu.Dropdown>
    </Menu>
    </div>
  )
}

export default BurgerMenu