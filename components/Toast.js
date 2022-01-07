import styles from "../styles/modules/toast.module.scss";

const Toast = ({ msg, handleShow, titleColor }) => {
  return (
    <div className={styles.toast} >
      <strong className={styles.title} style={{color: titleColor}}>{msg.title}</strong>

      <button
        type="button"
        className={styles.button}
        data-dismiss="toast"
        style={{ outline: "none" }}
        onClick={handleShow}
      >
        &#10005;
      </button>

      <div className={styles.message}>{msg.msg}</div>
    </div>
  );
};

export default Toast;
