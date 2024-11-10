"use client";

import WorkSpaceCard, { TypeWorkSpaceCard } from "../WorkSpaceCard";
import { getFromLocalStorage } from "@/utils/localStorage";
import NewWorkSpaceModal from "../NewWorkSpaceModal";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import useServer from "@/hook/userServer";
import Modal from "../Modal";
import { useRouter } from "next/navigation";

export type Workspace = {
  id: number;
  account_id: number;
  name: string;
  description: string;
}

export default function WorkSpaces() {
  const [workSpaces, setWorkSpaces] = useState<TypeWorkSpaceCard[]>([]);
  const account = getFromLocalStorage({ key: "account" });
  const [modal, setModal] = useState<boolean>(false);
  const { fetchServer, loading } = useServer();
  const router = useRouter();

  useEffect(() => {
    const getUserWorkSpaces = async () => {
      const response = await fetchServer({
        method: "GET",
        headers: { Authorization: `Bearer ${account?.token}` },
        route: `/account/${account?.id}/workspaces`,
      });

      const workspaces = response.workspaces.map((workspace: Workspace) => {
        return ({
          ...workspace,
          onClick: () => router.push(`/workspace/${workspace.id}`)
        })
      })

      setWorkSpaces([
        {
          id: 0,
          description: "Click to create a workspace.",
          name: "Create workspace.",
          onClick: () => setModal(!modal),
        },
        ...workspaces
      ]);
    };

    getUserWorkSpaces();
  }, []);

  return (
    <div className={styles.container}>
      <Modal modal={modal} setModal={setModal}>
        <NewWorkSpaceModal />
      </Modal>
      <h1>Your WorkSpaces:</h1>
      <hr />
      <div className={styles.box}>
        {workSpaces.map((item, index) => (
          <WorkSpaceCard
            description={item.description}
            id={item.id}
            name={item.name}
            key={index}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
}
