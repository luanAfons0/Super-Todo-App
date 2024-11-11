"use client"

import WorkSpaces from "@/components/WorkSpaces";
import { createContext, useState } from "react";
import UserInfos from "@/components/UserInfos";
import styles from "./styles.module.scss";

export type WorkspacesContextType = {
  reloadWorkSpaces: boolean;
  setReloadWorkSpaces: Function;
}

export const WorkspacesContext = createContext<WorkspacesContextType>({
  reloadWorkSpaces: true,
  setReloadWorkSpaces: () => { }
})

export default function AccountPage() {
  const [reloadWorkSpaces, setReloadWorkSpaces] = useState(true);

  return (
    <div className={styles.container}>
      <UserInfos />
      <WorkspacesContext.Provider value={{ reloadWorkSpaces, setReloadWorkSpaces }}>
        <WorkSpaces />
      </WorkspacesContext.Provider>
    </div>
  );
}
