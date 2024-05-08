import React from 'react'
import plus from "../../image/plus.svg"
import styles from "./services.module.css"

const Service = ({name, price}) => {
    const [isActive,  setIsActive] = React.useState(false);

    const handlerClick = () => {
        setIsActive(!isActive);
    }

  return (
    <div className={styles.wrapper}>
        <div className={styles.name}>{name}</div>
        <div className={styles.info}>
          <div className={styles.price}>{price}</div>
          <button className={`${styles.btn} ${isActive ? styles.active : ""}`} onClick={handlerClick}><img src={plus}/></button>
        </div>
    </div>
  )
}

export default Service