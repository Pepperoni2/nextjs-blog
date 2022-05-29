import { useContext } from "react";
import ReactDOM from "react-dom";
import { DataContext } from "../store/GlobalState";
import { ExitEvent } from "../store/Actions";
import { deleteData } from "../util/fetchData";
import { useRouter } from "next/router";
import styles from "../styles/modules/afterlogin/modal.module.scss";



const Modal = ({ open, onClose }) => {
  const { state, dispatch } = useContext(DataContext);
  const { modal, auth } = state;
  

  const handleSubmit = () => {

    //if(modal.type === 'DELETE_EVENT'){
      
    if(modal.type === 'ADD_USERS'){
        deleteData(`user/${modal.id}`, auth.token)
        .then(res => console.log(res))
    }

    if(modal.type === 'EXIT_EVENT'){
      dispatch(ExitEvent(modal.data, modal.id, "ADD_EVENT"));
       dispatch({ type: "ADD_MODAL", payload: [] });
    }

    
   
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

export default Modal;
