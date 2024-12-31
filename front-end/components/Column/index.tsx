import { Grip, Pencil } from "lucide-react";
import styles from "./styles.module.scss";

type Column = {
  column: any;
};

export default function Column({ column }: Column) {
  console.log(column);

  return (
    <div className={styles.container} style={{ backgroundColor: column.color }}>
      <div>
        <div className={styles.columnName}>
          <h2>{column.name}</h2>
          <div className={styles.iconRow}>
            <div className={styles.icon}>
              <Pencil />
            </div>
            <div className={styles.icon}>
              <Grip />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
