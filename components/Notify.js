import { useContext, useEffect } from 'react'
import { DataContext } from '../store/GlobalState'
import Loading from './Loading'
import Toast from './Toast'
//import styles from "../styles/modules/toast.module.scss"
import { motion, AnimatePresence } from "framer-motion";



const Notify = () => {
    const {state, dispatch} = useContext(DataContext)
    const { notify } = state
    // if(state){
    //     useEffect(() => {
    //         setTimeout(() => {
    //           console.log('Nach 3000sec schließen');
    //         }, 3000);
    //         // () => dispatch({ type: 'NOTIFY', payload: {} })
    //       },);
    // }
   

    return (
        <>
            {notify.loading && <Loading />}
            {notify.error &&
            <AnimatePresence>
                <Toast
                    msg={{ msg: notify.error, title: "Error"}}
                    handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
                    titleColor="red"
                />
                </AnimatePresence>
            }
            {notify.success &&
             <AnimatePresence>
                <Toast
                    msg={{ msg: notify.success, title: "Success" }}
                    handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
                    titleColor="green"
                />
                </AnimatePresence>
            }
        </>
    )
}

export default Notify