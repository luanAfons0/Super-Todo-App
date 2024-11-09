import styles from "./styles.module.scss";

type ModalType = {
    children: React.ReactNode;
    setModal: Function;
}

export default function Modal({ children, setModal }: ModalType) {
    return (
        <div className={styles.container} onClick={() => setModal(false)}>
            {children}
        </div>
    )
}