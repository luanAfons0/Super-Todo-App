"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import WorkSpaceCard, { TypeWorkSpaceCard } from "../WorkSpaceCard";
import { getFromLocalStorage } from "@/utils/localStorage";
import { WorkspacesContext } from "../WorkspacesList";
import NewWorkSpaceModal from "../NewWorkSpaceModal";
import LoadingSpinner from "../LoadingSpinner";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import useServer from "@/hook/userServer";
import { toast } from "react-toastify";
import Modal from "../Modal";

export type Workspace = {
  id: number;
  account_id: number;
  name: string;
  description: string;
};

export default function WorkSpaces() {
  const { reloadWorkSpaces, setReloadWorkSpaces } =
    useContext(WorkspacesContext);
  const [createWorkspaceModal, setCreateWorkspaceModal] =
    useState<boolean>(false);
  const [workSpaces, setWorkSpaces] = useState<TypeWorkSpaceCard[]>([]);
  const account = getFromLocalStorage({ key: "account" });
  const { fetchServer, loading } = useServer();
  const router = useRouter();

  const getUserWorkSpaces = useCallback(async () => {
    const response = await fetchServer({
      method: "GET",
      headers: { Authorization: `Bearer ${account?.token}` },
      route: `/account/${account?.id}/workspaces`,
    });

    const workspaces = response.workspaces.map((workspace: Workspace) => {
      return {
        ...workspace,
        onClick: () => router.push(`/workspace/${workspace.id}`),
      };
    });

    setWorkSpaces([
      {
        id: 0,
        description: "Click to create a workspace.",
        name: "Create workspace.",
        onClick: () => setCreateWorkspaceModal(!createWorkspaceModal),
      },
      ...workspaces,
    ]);
  }, []);

  useEffect(() => {
    getUserWorkSpaces();
  }, []);

  useEffect(() => {
    if (reloadWorkSpaces) {
      getUserWorkSpaces();
      setReloadWorkSpaces(false);
    }
  }, [reloadWorkSpaces, getUserWorkSpaces]);

  return (
    <div className={styles.container}>
      {loading && <LoadingSpinner />}
      <Modal modal={createWorkspaceModal} setModal={setCreateWorkspaceModal}>
        <NewWorkSpaceModal
          onSuccess={() => {
            setCreateWorkspaceModal(!createWorkspaceModal);
            toast.success("Workspace created successfully!");
            setReloadWorkSpaces(true);
          }}
        />
      </Modal>
      <h1>Your WorkSpaces:</h1>
      <hr />
      <div className={styles.box}>
        {workSpaces.map((item, index) => (
          <WorkSpaceCard
            description={item.description}
            onClick={item.onClick}
            name={item.name}
            id={item.id}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
