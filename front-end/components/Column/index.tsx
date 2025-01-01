"use client";

import EditColumnModal from "../EditColumnModal";
import { colors } from "../CreateColumnModal";
import { Grip, Pencil } from "lucide-react";
import styles from "./styles.module.scss";
import { useState } from "react";
import Modal from "../Modal";

export type ColumnType = {
  position: number;
  color: string;
  name: string;
  id: number;
};

type ColumnProps = {
  column: ColumnType;
};

export default function Column({ column }: ColumnProps) {
  const [editColumnModal, setEditColumnModal] = useState(false);

  return (
    <>
      <Modal modal={editColumnModal} setModal={setEditColumnModal}>
        <EditColumnModal
          column_id={column.id}
          closeModal={() => setEditColumnModal(!editColumnModal)}
          columnName={column.name}
          columnColor={
            colors.find((color) => color.value == column.color) ?? {
              label: "Green",
              value: "green",
            }
          }
        />
      </Modal>
      <div
        className={styles.container}
        style={{ backgroundColor: column.color }}
      >
        <div>
          <div className={styles.columnName}>
            <h2>{column.name}</h2>
            <div className={styles.iconRow}>
              <div
                className={styles.icon}
                onClick={() => setEditColumnModal(!editColumnModal)}
              >
                <Pencil />
              </div>
              <div className={`${styles.icon} drag`}>
                <Grip />
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
