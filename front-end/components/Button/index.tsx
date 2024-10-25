"use client";

import styles from "./styles.module.css";

export default function Button({
  buttonText,
  customStyle,
  onClick,
}: {
  buttonText: string;
  customStyle?: any;
  onClick?: Function;
}) {
  return (
    <button
      onClick={() => (onClick ? onClick() : undefined)}
      className={styles.button}
      style={{ ...customStyle }}
    >
      <p>{buttonText}</p>
    </button>
  );
}
