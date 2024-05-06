import { Modal } from "@mantine/core";
import styles from"./modal.module.css"
import photo from "../../image/Union.svg"


import { useTranslation } from "react-i18next";
import Input from "../input/input";
import Button from "../button/button";

function ModalComponent({ opened, close }) {
    const {t} = useTranslation();
  return (
    <>
      <Modal
      size="auto"
        styles={{
            content: { background: "black", border:"1px solid white", position:"relative", borderRadius:"30px", padding:"80px" },
            header: { background: "black" },
            close: { color: "white", background:"none", position:"absolute", top:"-40px", right:"-40px" },
        }}
        opened={opened}
        onClose={close}
        centered
      >
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div>{t("modal_title")}</div>
                <img src={photo} />
            </div>
            <div className={styles.right}>
            <div className={styles.fromTitle}>{t("form_title")}</div>
                <Input name={t("form_name")}/>
                <Input name="+7 (___) __-__-__"/>
                <Button
                click={()=>console.log("sudmit")}
                 text={t("modal_btn")}
                 classStyles={{
                   backgroundColor: "#5125DB",
                   border: "1px solid #5125DB",
                   transition: "all .3s",
                 }}/>
                 <div className={styles.agreement}>{t("agreement")}</div>
            </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalComponent;
