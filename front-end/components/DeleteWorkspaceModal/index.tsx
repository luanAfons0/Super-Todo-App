"use client";

import { getFromLocalStorage } from "@/utils/localStorage";
import styles from "./styles.module.scss";
import useServer from "@/hook/userServer";
import Button from "../Button";

export default function DeleteWorkspaceModal({
  onSuccess,
  workspaceId,
}: {
  onSuccess: Function;
  workspaceId: Number;
}) {
  const account = getFromLocalStorage({ key: "account" });
  const { fetchServer } = useServer();

  const deleteWorkspace = async () => {
    await fetchServer({
      method: "DELETE",
      route: `account/${account?.id}/workspaces/${workspaceId}`,
      headers: {
        Authorization: `Bearer ${account?.token}`,
      },
      successAction: onSuccess,
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Delete workspace:</h1>
        <hr />
      </div>
      <h2>ATTENTION!</h2>
      <p style={{ marginTop: "1rem" }}>
        This action is irreversible, do you want to continue?
      </p>
      <hr />
      <div className={styles.row}>
        <Button
          buttonText="Delete"
          onClick={deleteWorkspace}
          customStyle={{ margin: 0, padding: "0.5rem 1rem" }}
        />
      </div>
    </div>
  );
}
