import styles from "./styles.module.scss";

export default function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
}
