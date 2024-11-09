"use client";

import styles from "./styles.module.scss";

export default function Button({
  customStyle,
  buttonText,
  onClick,
}: {
  buttonText: string;
  onClick?: Function;
  customStyle?: any;
}) {
  return (
    <button
      onClick={() => (onClick ? onClick() : undefined)}
      style={{ ...customStyle }}
      className={styles.button}
    >
      <p>{buttonText}</p>
    </button>
  );
}
