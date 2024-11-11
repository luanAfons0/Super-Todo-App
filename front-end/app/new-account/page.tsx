"use client"

import FloatingBackButton from "@/components/FloatingBackButton";
import NewAccountBox from "@/components/NewAccountBox";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

export default function NewAccountPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <FloatingBackButton backAction={() => router.push("/")} />
      <NewAccountBox />
    </div>
  );
}
