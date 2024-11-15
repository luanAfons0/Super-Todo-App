"use client";

import FloatingBackButton from "@/components/FloatingBackButton";
import Container from "@/components/Container";
import LoginBox from "@/components/LoginBox";
import { useRouter } from "nextjs-toploader/app";

export default function LoginPage() {
  const router = useRouter();

  return (
    <Container>
      <FloatingBackButton backAction={() => router.push("/")} />
      <LoginBox />
    </Container>
  );
}
