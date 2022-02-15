import { createContext, useReducer, useEffect } from 'react'
import reducers from './Reducers'
import { getData } from '../util/fetchData'

export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const initialState = { notify: {}, auth: {}, users:[], enteredEvent: [], exit: [], modal:[] }
    const [state, dispatch] = useReducer(reducers, initialState)
    const { auth, enteredEvent } = state

    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin");
        if(firstLogin){
            getData('auth/accessToken').then(res => {
                if(res.err) return localStorage.removeItem("firstLogin")
                    
                dispatch({
                    type: "AUTH",
                    payload:{
                        token: res.access_token,
                        user: res.user
                    }
                })
            })
        }
    },[])

    useEffect(() => {
        if(auth.token){

            if(auth.user.role === 'admin'){
                getData('user', auth.token)
                .then(res => {
                    if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

                    dispatch({type: 'ADD_USERS', payload: res.users})
                })
            }
        }
        else{
            dispatch({type: 'ADD_USERS', payload: []})
        }
    }, [auth.token])

    useEffect(() =>{
        const __next__event01__participator =JSON.parse(localStorage.getItem('__next__event01__participator'))
        if(__next__event01__participator) dispatch({type: 'ADD_EVENT', payload: __next__event01__participator})
    },[])

    useEffect(() =>{
        localStorage.setItem('__next__event01__participator', JSON.stringify(enteredEvent))
    },[enteredEvent])

    return(
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}