import styles from "./style.module.scss";

export default function HomeBanner({ children }: any) {
  const lines = Array.from({ length: 9 });

  return (
    <div className={styles.HomeBannerContainer}>
      {children}
      <div className={styles.HomeBannerContent}>
        <div className={styles.LeftSide}>
          The right way <br /> to organize <br /> yourself!!!
        </div>
        <div className={styles.RigthSide}>
          <div className={styles.PostIt}>
            <ul>
              {lines.map((_: any, idx: number) => (
                <li key={idx}>
                  <div></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
