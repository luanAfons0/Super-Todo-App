"use client";

import FloatingBackButton from "@/components/FloatingBackButton";
import NewAccountBox from "@/components/NewAccountBox";
import Container from "@/components/Container";
import { useRouter } from "nextjs-toploader/app";

export default function NewAccountPage() {
  const router = useRouter();

  return (
    <Container>
      <FloatingBackButton backAction={() => router.push("/")} />
      <NewAccountBox />
    </Container>
  );
}
