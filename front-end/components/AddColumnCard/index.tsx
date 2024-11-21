import styles from "./styles.module.scss";
import { PlusIcon } from "lucide-react";

export default function AddColumnCard() {
    return (
        <div className={styles.container}>
            <PlusIcon size={25} />
            <p>Click here to create a column</p>
        </div>
    )
}