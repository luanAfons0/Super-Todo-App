import styles from "./styles.module.scss";
import { CirclePlus } from 'lucide-react';
import ToolTip from "../ToolTip";

export type TypeWorkSpaceCard = {
    description: string;
    name: string;
    id: number;
}

export default function WorkSpaceCard({ description, id, name }: TypeWorkSpaceCard) {
    return (
        <ToolTip tootTipText={description}>
            <div className={styles.container}>
                <CirclePlus size={100} />
            </div>
        </ToolTip>
    );
}
