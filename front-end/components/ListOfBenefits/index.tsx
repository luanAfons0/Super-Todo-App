import styles from "./styles.module.scss";
import { listIcon, editIcon, globeIcon, clockIcon } from "@/public/icons";

export default function ListOfBenefits() {
  return (
    <div className={styles.container}>
      <h2>List of benefits</h2>
      <p className={styles.ligthText}>
        Do more than just daily tasks <br /> on your to-do list
      </p>
      <div className={styles.benefits}>
        <div>
          {listIcon}
          <p className={styles.ligthText}>
            Organize your
            <br /> to-do list
          </p>
        </div>
        <div>
          {editIcon}
          <p className={styles.ligthText}>
            Add details to <br />
            all tasks
          </p>
        </div>
        <div>
          {globeIcon}
          <p className={styles.ligthText}>
            Plan your day <br />
            wherever you are
          </p>
        </div>
        <div>
          {clockIcon}
          <p className={styles.ligthText}>
            Never miss <br />
            deadlines
          </p>
        </div>
      </div>
    </div>
  );
}
