import WorkSpaces from "@/components/WorkSpaces";
import UserInfos from "@/components/UserInfos";
import styles from "./styles.module.scss";

export default function AccountPage() {
  return (
    <div className={styles.container}>
      <UserInfos />
      <WorkSpaces />
    </div>
  );
}
