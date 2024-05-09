import React from "react";
import styles from "./title-in-page.module.css";

const MainTitleInPage = ({ title }) => {
  return (
    <>
      <div className={styles.mainTitle}>{title}</div>
      <hr
        style={{
          width: "100%",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      />
    </>
  );
};

export default MainTitleInPage;
