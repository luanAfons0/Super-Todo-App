"use client";

import CreateColumnModal from "../CreateColumnModal";
import { ColumnContext } from "../WorkspacesTable";
import { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { PlusIcon } from "lucide-react";
import Modal from "../Modal";

export default function AddColumnCard() {
  const [showCreateColumnModal, setShowCreateColumnModal] = useState(false);
  const { lastPosition } = useContext(ColumnContext);

  return (
    <>
      <Modal modal={showCreateColumnModal} setModal={setShowCreateColumnModal}>
        <CreateColumnModal
          lastPosition={lastPosition}
          closeModal={() => setShowCreateColumnModal(!showCreateColumnModal)}
        />
      </Modal>
      <div
        className={styles.container}
        onClick={() => setShowCreateColumnModal(!showCreateColumnModal)}
      >
        <PlusIcon size={25} />
        <p>Click here to create a column</p>
      </div>
    </>
  );
}
