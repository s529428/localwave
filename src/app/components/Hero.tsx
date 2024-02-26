import styles from "../styles/hero.module.scss";

const Hero: React.FunctionComponent = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>The Local Wave</h1>
        <h2 className={styles.subtitle}>A KKFI 90.1 Show</h2>
      </div>
    </div>
  );
};
export default Hero;
