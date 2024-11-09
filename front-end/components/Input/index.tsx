"use client";

import styles from "./styles.module.scss";
import { ReactNode } from "react";

type InputProps = {
  type: "number" | "text" | "password";
  startIcon?: ReactNode;
  setValue: Function;
  value: string;
};

export default function Input({
  startIcon = undefined,
  setValue,
  value,
  type,
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
