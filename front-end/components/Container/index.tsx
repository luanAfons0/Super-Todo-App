import styles from "./styles.module.scss";

export type ContainerType = {
  children: React.ReactNode[];
};

export default function Container({ children }: ContainerType) {
  return <div className={styles.container}>{children}</div>;
}
