"use client";

import { ReactNode } from "react";
import styles from "./styles.module.css";

type InputProps = {
  type: "number" | "text" | "password";
  value: string;
  setValue: Function;
  startIcon?: ReactNode;
};

export default function Input({
  type,
  value,
  setValue,
  startIcon = undefined,
}: InputProps) {
  return (
    <div className={styles.container}>
      {startIcon && <div className={styles.startIcon}>{startIcon}</div>}
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </div>
  );
}
