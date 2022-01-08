export const ACTIONS = {
    NOTIFY: 'NOTIFY',
    AUTH: 'AUTH',
    ADD_EVENT: 'ADD_EVENT'
}

export const addToEnteredEvents = (event, entered) => {
    if(event.openslots === 0) return ({type: 'NOTIFY', payload: {error: 'This event is full'} })

    const enter = event.every(item => {
        return item._id !== event._id
    })

    if(!enter) return ({type: 'NOTIFY', payload: {error: 'You have already entered this event.'} })

    return ({type: 'NOTIFY', payload: [...entered, {...event, closedSlots: 1}] })
}
