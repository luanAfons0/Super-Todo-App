"use client";

import { useState } from "react";
import styles from "./styles.module.scss";

type Option = {
  value: String;
  label: String;
};

type Select = {
  value: String;
  options: Option[];
  setValue: Function;
};

export default function Select({ value, setValue, options }: Select) {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <div
      className={styles.container}
      onClick={() => setShowOptions(!showOptions)}
    >
      <p>{value}</p>
      {showOptions && (
        <div className={styles.options}>
          {options.map((option) => (
            <div onClick={() => setValue(option)}>
              <div className={styles.row}>
                <div
                  className={styles.preview}
                  style={{ backgroundColor: option.value as any }}
                />
                <div>{option.label}</div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
