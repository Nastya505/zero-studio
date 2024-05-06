import React from 'react'
import styles from "./button.module.css"

const Button = ({text, classStyles, click}) => {

  return (
    <button onClick={click} style={classStyles} className={styles.btn}>{text}</button>
  )
}

export default Button