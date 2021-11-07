import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Loading from './Loading'
import Toast from './Toast'

const Notify = () => {
    const [state, dispatch] = useContext(DataContext)
    const {notify} = state
    
    return(
        <>
            {notify.loading && <Loading />}
            {notify.error && <Toast />}
            {notify.success && <Toast />}
        </>
    )
}
