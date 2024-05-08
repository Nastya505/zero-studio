import React from 'react'
import styles from "./cardAdvantages.module.css"

const CardАdvantages = ({title, text}) => {
  return (
    <div className={styles.card}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
    </div>
  )
}

export default CardАdvantages