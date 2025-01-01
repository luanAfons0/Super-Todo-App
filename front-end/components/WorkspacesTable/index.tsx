"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import { getFromLocalStorage } from "@/utils/localStorage";
import { ReactSortable } from "react-sortablejs";
import Column, { ColumnType } from "../Column";
import LoadingSpinner from "../LoadingSpinner";
import AddColumnCard from "../AddColumnCard";
import { useParams } from "next/navigation";
import styles from "./styles.module.scss";
import useServer from "@/hook/userServer";

type Column = {
  name: string;
};

type CreteColumnContext = {
  updateColumns: boolean;
  setUpdateColumns: Function;
  lastPosition: number;
};

export const ColumnContext = createContext<CreteColumnContext>({
  updateColumns: false,
  setUpdateColumns: () => {},
  lastPosition: 0,
});

export default function WorkspacesTables() {
  const [updateColumns, setUpdateColumns] = useState<boolean>(false);
  const account = getFromLocalStorage({ key: "account" });
  const [columns, setColumns] = useState<ColumnType[]>([]);
  const { fetchServer } = useServer();
  const { id } = useParams();

  const getUserColumns = useCallback(async () => {
    const response = await fetchServer({
      method: "GET",
      route: `/account/${account?.id}/workspaces/${id}`,
      headers: {
        Authorization: `Bearer ${account?.token}`,
      },
    });
    const sortedItems = response.columns.sort(
      (item: ColumnType, nextItem: ColumnType) =>
        item.position - nextItem.position
    );
    setColumns(sortedItems);
  }, [id]);

  const updateColumnsPosition = useCallback(async (newList: Column[]) => {
    await fetchServer({
      method: "PATCH",
      route: `/account/${account?.id}/workspaces/positions/${id}`,
      headers: {
        Authorization: `Bearer ${account?.token}`,
      },
      body: {
        columns: newList,
      },
    });
  }, []);

  useEffect(() => {
    getUserColumns();
    if (updateColumns) {
      setUpdateColumns(!updateColumns);
    }
  }, [getUserColumns, updateColumns]);

  return (
    <ColumnContext.Provider
      value={{ updateColumns, setUpdateColumns, lastPosition: columns.length }}
    >
      <div className={styles.container}>
        <div className={styles.section}>
          <h1>Workspace:</h1>
          <AddColumnCard />
        </div>
        <hr />
        <ReactSortable
          className={styles.list}
          list={columns}
          forceAutoScrollFallback
          setList={(list) => {
            const newList = list.map((column, index) => {
              return { ...column, position: index + 1 };
            });
            updateColumnsPosition(newList);
            setColumns(list);
          }}
        >
          {columns.map((column: ColumnType) => (
            <Column key={`column-${column.position}`} column={column} />
          ))}
        </ReactSortable>
      </div>
    </ColumnContext.Provider>
  );
}
