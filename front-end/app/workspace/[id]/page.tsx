"use client";

import FloatingBackButton from "@/components/FloatingBackButton";
import WorkspacesTables from "@/components/WorkspacesTable";
import Container from "@/components/Container";
import { useRouter } from "nextjs-toploader/app";

export default function LoginPage() {
  const router = useRouter();

  return (
    <Container>
      <FloatingBackButton backAction={() => router.push("/account")} />
      <WorkspacesTables />
    </Container>
  );
}
