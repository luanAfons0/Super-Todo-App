import Link from "next/link";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.HeaderContainer}>
      <h1 className={styles.HeaderLogo}>Super Todo App</h1>

      <div>
        <ul className={styles.HeaderContent}>
          <li>
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/my-account"}>Your Account</Link>
          </li>
          <li>
            <Link href={"/sign-in"}>Sign-in</Link>{" "}
          </li>
          |
          <li>
            <Link href={"/log-in"}>Log-in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
