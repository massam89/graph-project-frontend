import React, { useContext } from "react";
import styles from "./index.module.css";

const Modal = ({text, modalHandler}) => {

  return (
      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.text}>{text}</p>
          <button className={styles.btn} onClick={modalHandler}>OK</button>
        </div>
      </div>
    )
  };

export default Modal;
