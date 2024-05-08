import React from "react";
import styles from "./accordion.module.css";
import circle from "../../image/circle.svg"

const Accordion = ({ id, title, text }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <span className={`${styles.number} ${isOpen ? styles.activeNumber : ""}`}>0{id}</span>
      <div className={styles.right}>
        <div className={`${styles.content} ${isOpen ? styles.open : ""}`}>
          <div className={styles.title}>{title}</div>
          {isOpen && <div className={`${styles.text} ${isOpen ? styles.activeText : ""}`}>{text}</div>}
        </div>
        <button className={`${styles.btn} ${isOpen ? styles.activeBtn : ""}`} onClick={toggleAccordion}>
          <img src={circle} />
        </button>
      </div>
    </div>
  );
};

export default Accordion;