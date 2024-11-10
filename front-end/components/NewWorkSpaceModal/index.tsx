"use client";

import { getFromLocalStorage } from "@/utils/localStorage";
import styles from "./styles.module.scss";
import useServer from "@/hook/userServer";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

export default function NewWorkSpaceModal({
  onSuccess,
}: {
  onSuccess: Function;
}) {
  const account = getFromLocalStorage({ key: "account" });
  const [description, setDescription] = useState("");
  const { fetchServer } = useServer();
  const [name, setName] = useState("");

  const createWorkSpace = async () => {
    await fetchServer({
      method: "POST",
      route: `/account/${account?.id}/workspaces`,
      headers: {
        Authorization: `Bearer ${account?.token}`,
      },
      body: {
        name,
        description,
        account_id: account?.id,
      },
      successAction: onSuccess,
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Create a workspace:</h1>
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
          buttonText="Create"
          onClick={createWorkSpace}
          customStyle={{ margin: 0, padding: "0.5rem 1rem" }}
        />
      </div>
    </div>
  );
}
