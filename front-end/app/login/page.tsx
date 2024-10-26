import styles from "./styles.module.scss";
import LoginBox from "@/components/LoginBox";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginBox />
    </div>
  );
}
