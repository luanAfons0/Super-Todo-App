"use client";

import FloatingBackButton from "@/components/FloatingBackButton";
import Container from "@/components/Container";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <Container>
      <FloatingBackButton backAction={() => router.push("/")} />
      <div>
        <h1>Teste</h1>
      </div>
    </Container>
  );
}
