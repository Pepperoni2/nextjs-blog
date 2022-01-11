import { useContext } from "react";
import ReactDOM from "react-dom";
import { DataContext } from "../store/GlobalState";
import { ExitEvent } from "../store/Actions";

const Modal = ({ open, onClose }) => {
    const {state, dispatch} = useContext(DataContext)
    const { exit } = state

    const handleSubmit = () => {
        dispatch(ExitEvent(exit.data, exit.id, 'ADD_EVENT'))
        dispatch({type: 'EXIT_EVENT', payload: {} })
    }

    if (!open) return null

    return ReactDOM.createPortal(
        <>
            <div>
                <div>
                    <div>
                        <div onClick={onClose}>
                            <h5>
                                {exit.title}
                            </h5>
                            <button type="button">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div>
                            Do you want to dismiss this event?
                        </div>
                        <div>
                            <button type="button" onClick={handleSubmit}>Yes</button>
                            <button type="button" onClick={onClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}

export default Modal