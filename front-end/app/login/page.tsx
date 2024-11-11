"use client"

import FloatingBackButton from "@/components/FloatingBackButton";
import LoginBox from "@/components/LoginBox";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <FloatingBackButton backAction={() => router.push("/")} />
      <LoginBox />
    </div>
  );
}
