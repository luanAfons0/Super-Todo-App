"use client";

import { createContext, useState } from "react";
import WorkSpaces from "../WorkSpaces";

export type WorkspacesContextType = {
  reloadWorkSpaces: boolean;
  setReloadWorkSpaces: Function;
};

export const WorkspacesContext = createContext<WorkspacesContextType>({
  reloadWorkSpaces: true,
  setReloadWorkSpaces: () => {},
});

export default function WorkspacesList() {
  const [reloadWorkSpaces, setReloadWorkSpaces] = useState(true);

  return (
    <WorkspacesContext.Provider
      value={{ reloadWorkSpaces, setReloadWorkSpaces }}
    >
      <WorkSpaces />
    </WorkspacesContext.Provider>
  );
}
