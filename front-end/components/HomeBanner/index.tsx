import styles from "./style.module.css";

export default function HomeBanner({ children }: any) {
  return (
    <div className={styles.HomeBannerContainer}>
      {children}

      <div className={styles.HomeBannerContent}>
        <div className={styles.LeftSide}>
          <div className={styles.LeftBar} />
          The Right Way <br /> To Organize <br /> Yourself !!!
        </div>
        <div className={styles.RigthSide}>
          <div className={styles.PostIt}>
            <ul>
              <li>
                <div></div>
              </li>

              <li>
                <div></div>
              </li>

              <li>
                <div></div>
              </li>

              <li>
                <div></div>
              </li>

              <li>
                <div></div>
              </li>

              <li>
                <div></div>
              </li>

              <li>
                <div></div>
              </li>

              <li>
                <div></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
