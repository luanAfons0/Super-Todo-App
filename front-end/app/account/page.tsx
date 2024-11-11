"use client";

import FloatingBackButton from "@/components/FloatingBackButton";
import WorkSpaces from "@/components/WorkSpaces";
import { createContext, useState } from "react";
import Container from "@/components/Container";
import UserInfos from "@/components/UserInfos";
import { useRouter } from "next/navigation";

export type WorkspacesContextType = {
  reloadWorkSpaces: boolean;
  setReloadWorkSpaces: Function;
};

export const WorkspacesContext = createContext<WorkspacesContextType>({
  reloadWorkSpaces: true,
  setReloadWorkSpaces: () => {},
});

export default function AccountPage() {
  const [reloadWorkSpaces, setReloadWorkSpaces] = useState(true);
  const router = useRouter();

  return (
    <Container>
      <FloatingBackButton backAction={() => router.push("/")} />
      <UserInfos />
      <WorkspacesContext.Provider
        value={{ reloadWorkSpaces, setReloadWorkSpaces }}
      >
        <WorkSpaces />
      </WorkspacesContext.Provider>
    </Container>
  );
}
