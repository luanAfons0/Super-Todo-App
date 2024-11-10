import styles from "./styles.module.scss";

type ToolTip = {
  tootTipText: string;
  children: React.ReactNode;
};

export default function ToolTip({ tootTipText, children }: ToolTip) {
  return (
    <div className={styles.container}>
      <div className={styles.tooltiptext}>{tootTipText}</div>
      {children}
    </div>
  );
}
