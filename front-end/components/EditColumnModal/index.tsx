"use client";

import { colors } from "../CreateColumnModal";
import styles from "./styles.module.scss";
import { useState } from "react";
import Select from "../Select";
import Button from "../Button";
import Input from "../Input";

type EditColumnModal = {
  columnName: string;
  columnColor: { value: string; label: string };
};

export default function EditColumnModal({
  columnColor,
  columnName,
}: EditColumnModal) {
  console.log(columnColor);

  const [color, setColor] = useState(columnColor);
  const [name, setName] = useState(columnName);

  const submit = () => {
    console.log("updated column infos");
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1>Name:</h1>
        <Input
          placeHolder={columnName}
          type="text"
          value={name}
          setValue={setName}
        />
      </div>
      <div className={styles.inputStyle}>
        <h1>Column color:</h1>
        <div className={styles.select}>
          <div
            className={styles.preview}
            style={{ backgroundColor: color.value }}
          />
          <Select value={color.label} setValue={setColor} options={colors} />
        </div>
      </div>
      <div className={styles.buttonRow}>
        <Button
          onClick={submit}
          buttonText="Update"
          customStyle={{ padding: ".5rem" }}
        />
      </div>
    </div>
  );
}
