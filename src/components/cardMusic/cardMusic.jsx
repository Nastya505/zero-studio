import React from "react";
import styles from "./cardMusic.module.css";

import play from "../../image/play.svg";
import pause from "../../image/pause.svg";

const CardMusic = ({ music, id, activeId, setActiveId }) => {
    const isActive = id === activeId;

    const handleClick = () => {
      setActiveId(isActive ? null : id);
    };
  return (
    <div className={styles.card}>
         <div className={styles.img}>
                <img className={styles.img} src={music.cover} alt="cover" />
                {isActive && <span className={styles.shadow}></span>}
            </div>
      <div className={styles.info}>
        <button className={`${styles.btn} ${isActive ? styles.activeBtn : ""}`} onClick={handleClick}>
            {isActive ? <img src={pause} /> : <img style={{marginLeft:"3px", transition:"marginLeft .01s"}} src={play} /> }
        </button>
        <div className={styles.wrapper}>
            <span className={styles.title}>{music.title}</span>
            <span className={styles.author}>{music.author}</span>
        </div>
      </div>
    </div>
  );
};

export default CardMusic;
