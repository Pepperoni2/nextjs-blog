import { useContext } from "react";
import ReactDOM from "react-dom";
import { DataContext } from "../store/GlobalState";
import { ExitEvent } from "../store/Actions";
import styles from "../styles/modules/afterlogin/modal.module.scss";
const Modal = ({ open, onClose }) => {
  const { state, dispatch } = useContext(DataContext);
  const { exit } = state;

  const handleSubmit = () => {
    dispatch(ExitEvent(exit.data, exit.id, "ADD_EVENT"));
    dispatch({ type: "EXIT_EVENT", payload: {} });
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.wrapper}>
        <div className={styles.backg}>
          <div className={styles.topdiv}>
            <h5 className={styles.title}>Do you really want to dismiss this event?</h5>
            
          </div>
          <div className={styles.bottomdiv}>
            <p className={styles.text}>Title: <span>{exit.title}</span> </p>
            <div className={styles.divbt}>
              <button
                type="button"
                onClick={handleSubmit}
                className={styles.btyes}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={onClose}
                className={styles.btcancle}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
