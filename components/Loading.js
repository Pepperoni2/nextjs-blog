import styles from "../styles/modules/loading.module.scss";
import { useEffect } from "react";


const Loading = (props) => {


  return (
    <div className={props.loading ? styles.container1 : styles.none}>
      <h2 className={styles.loading}>Loading</h2>
      <div className={styles.bubbles}></div>
      <div className={styles.bubbles}></div>
    </div>
  );
};

export default Loading;
