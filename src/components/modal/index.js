import React, { useContext } from "react";
import styles from "./index.module.css";
import { Context } from "../../store/ContextProvider";

const Modal = () => {
  const { state, modalHandler } = useContext(Context);

  return (
    state.modal.isShow && (
      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.text}>{state.modal.text}</p>
          <button className={styles.btn} onClick={() => modalHandler()}>OK</button>
        </div>
      </div>
    )
  );
};

export default Modal;
