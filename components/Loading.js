import styles from "../styles/modules/loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container1}>
      <h2 className={styles.loading}>Loading</h2>{" "}
      <div className={styles.bubbles}></div>
      <div className={styles.bubbles}></div>
    </div>
  );
};

export default Loading;
