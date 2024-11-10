"use client";

import UpdateWorkspaceModal from "../UpdateWorkspaceModal";
import DeleteWorkspaceModal from "../DeleteWorkspaceModal";
import { PencilRuler, Trash2 } from "lucide-react";
import styles from "./styles.module.scss";
import { CirclePlus } from "lucide-react";
import ToolTip from "../ToolTip";
import { useState } from "react";
import Modal from "../Modal";

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
  const [updateModal, setUpdateModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const onUpdate = () => {
    setUpdateModal(!updateModal);
    window.location.reload();
  };

  const onDelete = () => {
    setUpdateModal(!updateModal);
    window.location.reload();
  };

  return (
    <ToolTip tootTipText={description}>
      <Modal modal={updateModal} setModal={setUpdateModal}>
        <UpdateWorkspaceModal onSuccess={onUpdate} workspaceId={id} />
      </Modal>
      <Modal modal={deleteModal} setModal={setDeleteModal}>
        <DeleteWorkspaceModal onSuccess={onDelete} workspaceId={id} />
      </Modal>
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
            <button onClick={() => setUpdateModal(!updateModal)}>
              <PencilRuler size={20} />
            </button>
            <button onClick={() => setDeleteModal(!deleteModal)}>
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      )}
    </ToolTip>
  );
}
