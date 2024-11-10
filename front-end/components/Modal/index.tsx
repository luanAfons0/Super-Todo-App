"use client"

import styles from "./styles.module.scss";
import { useEffect } from "react";

type ModalType = {
  children: React.ReactNode;
  modal: boolean;
  setModal: Function;
};

export default function Modal({ children, setModal, modal }: ModalType) {
  useEffect(() => {
    if (modal) {
      document.body.classList.add(styles.blockScroll);
    } else {
      document.body.classList.remove(styles.blockScroll);
    }
  }, [modal]);

  return (
    <>
      {modal && (
        <>
          <div className={styles.container} onClick={() => setModal(!modal)}></div>
          <div className={styles.children}>{children}</div>
        </>
      )}

    </>
  );
}
