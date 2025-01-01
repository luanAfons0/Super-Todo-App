"use client";

import FloatingBackButton from "@/components/FloatingBackButton";
import { useRouter } from "nextjs-toploader/app";
import Container from "@/components/Container";
import dynamic from "next/dynamic";

export default function LoginPage() {
  const router = useRouter();

  const DynamicWorkspacesTable = dynamic(
    () => import("@/components/WorkspacesTable"),
    {
      ssr: false,
    }
  );

  return (
    <Container>
      <FloatingBackButton backAction={() => router.push("/account")} />
      <DynamicWorkspacesTable />
    </Container>
  );
}
