import styles from "./styles.module.scss";
import { CirclePlus } from "lucide-react";
import ToolTip from "../ToolTip";

export type TypeWorkSpaceCard = {
  description: string;
  name: string;
  id: number;
  onClick: Function;
};

export default function WorkSpaceCard({
  description,
  id,
  name,
  onClick,
}: TypeWorkSpaceCard) {
  return (
    <ToolTip tootTipText={description}>
      {id === 0 ? (
        <div className={styles.container} onClick={() => onClick()}>
          <CirclePlus size={100} />
        </div>
      ) : (
        <div className={styles.container} onClick={() => onClick()}>
          <h3>{name}</h3>
        </div>
      )}
    </ToolTip>
  );
}
