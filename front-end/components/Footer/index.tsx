import { instagramIcon, facebookIcon, whatsappIcon } from "../icons/index";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.icons}>
        <div>{whatsappIcon}</div>
        <div>{facebookIcon}</div>
        <div>{instagramIcon}</div>
      </div>
      <div className={styles.texts}>
        <p>
          About us &nbsp; | &nbsp; Contact
          <br />
        </p>
        <p>Your account</p>
        <p className={styles.copyright}>&#169; 2024 Luan Afonso</p>
      </div>
    </div>
  );
}
