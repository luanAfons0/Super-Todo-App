"use client";

import { getFromLocalStorage } from "@/utils/localStorage";
import { useCallback, useEffect, useState } from "react";
import AddColumnCard from "../AddColumnCard";
import { useParams } from "next/navigation";
import styles from "./styles.module.scss";
import useServer from "@/hook/userServer";

type Column = {
  name: string;
};

export default function WorkspacesTables() {
  const account = getFromLocalStorage({ key: "account" });
  const [columns, setColumns] = useState<Column[]>([]);
  const { fetchServer } = useServer();
  const { id } = useParams();

  const getUserColumns = useCallback(async () => {
    const response = await fetchServer({
      method: "GET",
      route: `/account/${account.id}/workspaces/${id}`,
      headers: {
        Authorization: `Bearer ${account.token}`,
      },
    });
    setColumns(response.columns);
  }, [id]);

  useEffect(() => {
    getUserColumns();
  }, [getUserColumns]);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1>Workspace:</h1>
        <AddColumnCard />
      </div>
      <hr />
      <div className={styles.list}>
        {columns.map((column) => {
          return (
            <div>
              <h1>{column.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
