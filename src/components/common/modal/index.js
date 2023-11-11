import React from "react";
import styles from "./index.module.css";

const Modal = ({text, onClickBtn, btnText}) => {

  return (
      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.text}>{text}</p>
          <button className={styles.btn} onClick={onClickBtn}>{btnText}</button>
        </div>
      </div>
    )
  };

export default Modal;
