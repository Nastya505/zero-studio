import React from 'react'



import styles from "./header.module.css"
import logo from "../../image/logo.svg"
import Navbar from '../navbar/navbar';
import BtnsLanguage from '../btn-language/btns-language';

const Header = () => {

  return (
    <div className="container">
        <div className={styles.header}>
            <img src={logo} alt='logo'/>
            <BtnsLanguage/>
            <Navbar/>
        </div>
    </div>
  )
}

export default Header