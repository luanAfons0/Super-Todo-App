"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import { getFromLocalStorage } from "@/utils/localStorage";
import AddColumnCard from "../AddColumnCard";
import { useParams } from "next/navigation";
import styles from "./styles.module.scss";
import useServer from "@/hook/userServer";
import Column from "../Column";

type Column = {
  name: string;
};

type CreteColumnContext = {
  updateColumns: boolean;
  setUpdateColumns: Function;
};

export const ColumnContext = createContext<CreteColumnContext>({
  updateColumns: false,
  setUpdateColumns: () => {},
});

export default function WorkspacesTables() {
  const [updateColumns, setUpdateColumns] = useState<boolean>(false);
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
    if (updateColumns) {
      setUpdateColumns(!updateColumns);
    }
  }, [getUserColumns, updateColumns]);

  return (
    <ColumnContext.Provider value={{ updateColumns, setUpdateColumns }}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1>Workspace:</h1>
          <AddColumnCard />
        </div>
        <hr />
        <div className={styles.list}>
          {columns.map((column) => (
            <Column column={column} />
          ))}
        </div>
      </div>
    </ColumnContext.Provider>
  );
}
