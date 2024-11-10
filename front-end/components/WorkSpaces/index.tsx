"use client"

import WorkSpaceCard, { TypeWorkSpaceCard } from "../WorkSpaceCard";
import NewWorkSpaceModal from "../NewWorkSpaceModal";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import useServer from "@/hook/userServer";
import Modal from "../Modal";

export default function WorkSpaces() {
  const [workSpaces, setWorkSpaces] = useState<TypeWorkSpaceCard[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  // const { fetchServer, loading } = useServer();

  useEffect(() => {
    const getUserWorkSpaces = async () => {
      // const response = await fetchServer({ method: "GET", route: "/account/:id/workspaces" });
      setWorkSpaces([{
        id: 0,
        description: "Click to create a workspace.",
        name: "Create workspace.",
        onClick: () => setModal(!modal),
      }])
    }

    getUserWorkSpaces()
  }, [])

  return (
    <div className={styles.container}>
      {modal && (
        <Modal modal={modal} setModal={setModal} >
          <NewWorkSpaceModal />
        </Modal>
      )}
      <h1>Your WorkSpaces:</h1>
      <hr />
      <div className={styles.box}>
        {workSpaces.map((item, index) => (
          <WorkSpaceCard description={item.description} id={item.id} name={item.name} key={index} onClick={item.onClick} />
        ))}
      </div>
    </div>
  );
}
