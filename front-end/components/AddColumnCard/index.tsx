"use client";

import CreateColumnModal from "../CreateColumnModal";
import styles from "./styles.module.scss";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";

export default function AddColumnCard() {
  const [showCreateColumnModal, setShowCreateColumnModal] = useState(false);

  return (
    <>
      <Modal modal={showCreateColumnModal} setModal={setShowCreateColumnModal}>
        <CreateColumnModal
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
