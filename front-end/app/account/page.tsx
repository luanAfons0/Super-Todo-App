"use client";

import FloatingBackButton from "@/components/FloatingBackButton";
import WorkspacesList from "@/components/WorkspacesList";
import Container from "@/components/Container";
import UserInfos from "@/components/UserInfos";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();

  return (
    <Container>
      <FloatingBackButton backAction={() => router.push("/")} />
      <UserInfos />
      <WorkspacesList />
    </Container>
  );
}
