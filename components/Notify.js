import { useContext } from 'react'
import { DataContext } from '../store/GlobalState'
import Loading from './Loading'
import Toast from './Toast'
//import styles from "../styles/modules/toast.module.scss"



const Notify = () => {
    const {state, dispatch} = useContext(DataContext)
    const { notify } = state

    return (
        <>
            {notify.loading && <Loading />}
            {notify.error &&
                <Toast
                    msg={{ msg: notify.error, title: "Error"}}
                    handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
                    titleColor="red"
                />
            }
            {notify.success &&
                <Toast
                    msg={{ msg: notify.success, title: "Success" }}
                    handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
                    titleColor="green"
                />
            }
        </>
    )
}

export default Notify