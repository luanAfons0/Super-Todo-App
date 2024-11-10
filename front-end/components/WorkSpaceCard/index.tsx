import { PencilRuler, Trash2 } from "lucide-react";
import styles from "./styles.module.scss";
import { CirclePlus } from "lucide-react";
import ToolTip from "../ToolTip";

export type TypeWorkSpaceCard = {
  description: string;
  onClick: Function;
  name: string;
  id: number;
};

export default function WorkSpaceCard({
  description,
  onClick,
  name,
  id,
}: TypeWorkSpaceCard) {
  return (
    <ToolTip tootTipText={description}>
      {id === 0 ? (
        <div
          style={{ justifyContent: "center" }}
          className={styles.container}
          onClick={() => onClick()}
        >
          <CirclePlus size={100} />
        </div>
      ) : (
        <div className={`${styles.container}`}>
          <div className={styles.cardHeader} onClick={() => onClick()}>
            <h3>{name}</h3>
          </div>
          <div className={styles.cardFooter}>
            <button>
              <PencilRuler size={20} />
            </button>
            <button>
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      )}
    </ToolTip>
  );
}
