import { ClipboardList, ClipboardPlus, Clock, Globe } from 'lucide-react';
import styles from "./styles.module.scss";

export default function ListOfBenefits() {
  return (
    <div className={styles.container}>
      <h2>List of benefits</h2>
      <p className={styles.ligthText}>
        Do more than just daily tasks <br /> on your to-do list
      </p>
      <div className={styles.benefits}>
        <div>
          <ClipboardList strokeWidth={1} />
          <p className={styles.ligthText}>
            Organize your
            <br /> to-do list
          </p>
        </div>
        <div>
          <ClipboardPlus strokeWidth={1} />
          <p className={styles.ligthText}>
            Add details to <br />
            all tasks
          </p>
        </div>
        <div>
          <Globe strokeWidth={1} />
          <p className={styles.ligthText}>
            Plan your day <br />
            wherever you are
          </p>
        </div>
        <div>
          <Clock strokeWidth={1} />
          <p className={styles.ligthText}>
            Never miss <br />
            deadlines
          </p>
        </div>
      </div>
    </div>
  );
}
