import styles from "./styles.module.scss";
import Button from "../Button";

export default function StartNow() {
  return (
    <div className={styles.container}>
      <h1>Start managing your team&rsquo;s backlogs today</h1>
      <p id={styles.ligthText}>
        Say goodbye to sticky notes and hello <br />
        to your new to-do list app.
      </p>
      <a href="/login">
        <Button buttonText="Start now" />
      </a>
    </div>
  );
}
