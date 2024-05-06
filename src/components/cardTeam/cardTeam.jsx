import React from 'react'
import styles from "./cardTeam.module.css"
const CardTeam = ({people}) => {
  return (
    <div className={styles.card}>
        <img src={people.photo} />
        <div className={styles.info}>
            <div className={styles.name}>{people.name}</div>
            <div className={styles.profession}>{people.profession}</div>
        </div>
    </div>
  )
}

export default CardTeam