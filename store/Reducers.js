import { ACTIONS } from './Actions'

const reducers = (state, action) => {
    switch (action.type) {
        case ACTIONS.NOTIFY:
            return {
                ...state,
                notify: action.payload
            };
        case ACTIONS.AUTH:
            return {
                ...state,
                auth: action.payload
            };
        case ACTIONS.ADD_EVENT:
            return {
                ...state,
                enteredEvent: action.payload
            };
        case ACTIONS.EXIT_EVENT:
            return {
                ...state,
                exit: action.payload
            };
        default:
            return state;
    }
}

export default reducers