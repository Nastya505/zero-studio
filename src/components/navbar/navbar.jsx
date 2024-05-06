import React from 'react'
import { useTranslation } from 'react-i18next';

import styles from "./navbar.module.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {t} = useTranslation();
  return (
    <div className={styles.wrapper}>
          <div className={styles.nav}>
           <Link className={styles.link} to="/">{t("title_home")}</Link> 
           <Link className={styles.link} to="/about">{t("title_about")}</Link> 
           <Link className={styles.link} to="/projects">{t("title_projects")}</Link> 
           <Link className={styles.link} to="/cost">{t("title_cost")}</Link> 
        </div>
        <Link className={styles.link} to="/contact">{t("title_contacts")}</Link>
    </div>
  )
}

export default Navbar