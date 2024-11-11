"use client";

import { ChevronLeft } from "lucide-react";
import styles from "./styles.module.scss";
import { useCallback } from "react";

export type FloatingBackButtonType = {
  backAction: Function;
};

export default function FloatingBackButton({
  backAction,
}: FloatingBackButtonType) {
  const cachedBackAction = useCallback(backAction, []);

  return (
    <div className={styles.container} onClick={() => cachedBackAction()}>
      <ChevronLeft size={40} />
    </div>
  );
}
