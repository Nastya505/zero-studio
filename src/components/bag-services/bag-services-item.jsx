import React from 'react'
import styles from "./bag-services.module.css"
import plus from "../../image/plus.svg"

const BagServicesItem = ({id, title, text, price, fresh}) => {
    const [isActive,  setIsActive] = React.useState(false);

    const handlerClick = () => {
        setIsActive(!isActive);
    }

  return (
    <div className={styles.wrapperItem}>
        <div className={styles.item}>
            <div className={styles.top}>
                <div className={styles.number}>
                    <span>0{id}</span>
                    {fresh ? <div className={styles.new}>новинка</div> : null}
                </div>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{text}</div>
            </div>
    
            <div className={styles.bottom}>
                <span className={styles.price}>{price}</span>
                <button className={`${styles.btn} ${isActive ? styles.active : ""}`} onClick={handlerClick}><img src={plus}/></button>
            </div>
    
        </div>

            {isActive ? <span className={styles.shadow}></span> : null}
    </div>
  )
}

export default BagServicesItem