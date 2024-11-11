"use client";

import { getFromLocalStorage } from "@/utils/localStorage";
import styles from "./styles.module.scss";
import useServer from "@/hook/userServer";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

export default function UpdateWorkspaceModal({
  initialDescription,
  workspaceId,
  initialName,
  onSuccess,
}: {
  initialDescription: string;
  onSuccess: Function;
  workspaceId: Number;
  initialName: string;
}) {
  const [description, setDescription] = useState<string>(initialDescription);
  const account = getFromLocalStorage({ key: "account" });
  const [name, setName] = useState<string>(initialName);
  const { fetchServer } = useServer();

  const updateWorkspace = async () => {
    await fetchServer({
      method: "PATCH",
      route: `/account/${account?.id}/workspaces/${workspaceId}`,
      headers: {
        Authorization: `Bearer ${account?.token}`,
      },
      body: {
        name,
        description,
      },
      successAction: onSuccess,
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Update workspace:</h1>
        <hr />
      </div>
      <div className={styles.item}>
        <label>Name:</label>
        <Input setValue={setName} type="text" value={name} />
      </div>

      <div className={styles.item}>
        <label>Description:</label>
        <Input setValue={setDescription} type="text" value={description} />
      </div>
      <hr />
      <div className={styles.row}>
        <Button
          buttonText="Update"
          onClick={updateWorkspace}
          customStyle={{ margin: 0, padding: "0.5rem 1rem" }}
        />
      </div>
    </div>
  );
}
