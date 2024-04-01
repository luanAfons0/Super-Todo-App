import Link from "next/link";
import styles from "./styles.module.css";

export default function Header() {
  const mobileLines = Array.from({ length: 3 });

  return (
    <div className={styles.HeaderContainer}>
      <h1 className={styles.HeaderLogo}>
        <Link href={"/"}>Super Todo App</Link>
      </h1>

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
          <div></div>
        </ul>

        {/* TODO mobile menu */}
        <div className={styles.HamburgerMenu}>
          {mobileLines.map((_: any, idx: number) => {
            return <div key={idx} className={styles.MobileLines} />;
          })}
        </div>
      </div>
    </div>
  );
}
