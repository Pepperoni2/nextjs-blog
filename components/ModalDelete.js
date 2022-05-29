import { useContext } from "react";
import ReactDOM from "react-dom";
import { DataContext } from "../store/GlobalState";
import { deleteEvent } from "../store/Actions";
import { deleteData } from "../util/fetchData";
import { useRouter } from "next/router";
import styles from "../styles/modules/afterlogin/modal.module.scss";


const ModalDeleteEvent = ({ open, onClose }) => {
  const { state, dispatch } = useContext(DataContext);
  const { modal, auth } = state;
  

  const handleSubmit = () => {

    if(modal.type === 'DELETE_EVENT'){
      console.log(modal.token)
      dispatch({type: 'NOTIFY', payload: {loading: true}})
      deleteData(`event/${modal.id}`, auth.token)
      .then(res => {
        if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
        dispatch({type: 'NOTIFY', payload: {success: res.msg}})
     })
    }
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.wrapper}>
        <div className={styles.backg}>
          <div className={styles.topdiv}>
            <h5 className={styles.title}>Do you really want to delete this event?</h5>
            
          </div>
          <div className={styles.bottomdiv}>
            <p className={styles.text}>Title: <span>{modal.title}</span> </p>
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

export default ModalDeleteEvent;
