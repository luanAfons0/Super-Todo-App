"use client";
import Button from "../Button";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function PostItDemonstration() {
  const [randomColor, setRandomColor] = useState("#eee30c");
  const lines = Array.from({ length: 6 });

  const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    setRandomColor("#" + n.slice(0, 6));
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>
          Colors fully <br />
          customizable!
        </h2>
        <div onClick={randomHexColorCode}>
          <Button buttonText="Generate random color" />
        </div>
      </div>
      <div>
        <div className={styles.PostIt} style={{ backgroundColor: randomColor }}>
          <ul>
            {lines.map((_: any, idx: number) => (
              <li key={idx}>
                <div></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
