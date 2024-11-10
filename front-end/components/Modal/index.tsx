import styles from "./styles.module.scss";

type ModalType = {
    children: React.ReactNode;
    modal: boolean;
    setModal: Function;
}

export default function Modal({ children, setModal, modal }: ModalType) {
    return (
        <>
            <div className={styles.container} onClick={() => setModal(!modal)}></div>
            <div className={styles.children}>{children}</div>
        </>
    )
}