import styles from "./styles.module.css";

export default function Button({ buttonText }: { buttonText: string }) {
  return (
    <button className={styles.button}>
      <p>{buttonText}</p>
    </button>
  );
}
