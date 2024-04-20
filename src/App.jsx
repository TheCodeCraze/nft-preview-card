import styles from "./App.module.css";

export const App = () => {
  return (
    <main className={styles.card}>
      <div className={styles["card-image"]}>
        <img
          src="/image-equilibrium.jpg"
          alt="Equilibrium illustration"
          className={styles.image}
        />
      </div>
      <div className={styles["card-text"]}>
        <h1 className={styles.title}>Equilibrium #3429</h1>
        <p className={styles.description}>
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className={styles.info}>
          <div className={styles.value}>
            <img
              src="/icon-ethereum.svg"
              alt="Ethereum illustration"
              className={styles.image}
            />
            <p className={styles.text}>0.041 ETH</p>
          </div>
          <div className={styles.remaining}>
            <img
              src="/icon-clock.svg"
              alt="Clock illustration"
              className={styles.image}
            />
            <p className={styles.text}>3 days left</p>
          </div>
        </div>
        <hr className={styles.line} />
        <div className={styles.creator}>
          <img
            src="/image-avatar.png"
            alt="Creator's profile"
            className={styles.profile}
          />
          <p className={styles.name}>
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </div>
    </main>
  );
};
