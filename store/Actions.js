/* const participator = await Users.findOne({ username })
    if(participator) {
        const event = await Events.findByIdAndUpdate(event._id,{$push: { participants: participator._id} })
    }
    else {
        return({ type: 'NOTIFY', payload: { error: 'This assignment has failed!'}})
    } */
export const ACTIONS = {
    NOTIFY: 'NOTIFY',
    AUTH: 'AUTH',
    ADD_EVENT: 'ADD_EVENT',
    EXIT_EVENT: 'EXIT_EVENT',
    DELETE_EVENT: 'DELETE_EVENT',
    ADD_MODAL: 'ADD_MODAL',
    ADD_USERS: 'ADD_USERS', 
    ADD_ORGANIZERS: 'ADD_ORGANIZERS',
}

export const addToEnteredEvents = (event, enteredEvent) => {
    if (event.openslots === 0) return ({ type: 'NOTIFY', payload: { error: 'This event is full' } })

    const enter = enteredEvent.every(item => {
        return item._id !== event._id
    })

    if (!enter) return ({ type: 'NOTIFY', payload: { error: 'You have already entered this event.' } })
    else {
        return ({ type: 'ADD_EVENT', payload: [...enteredEvent, { ...event, closedSlots: event.closedSlots += 1, openslots: event.openslots -= 1 }] })
    }

}

export const ExitEvent = (data, id, type) => {
    const newData = data.filter(item => item._id !== id)
    return ({ type, payload: newData })
}

export const deleteEvent = (data, id, type) => {
    const newData = data.filter(item => item._id !== id)
    return ({ type, payload: newData })
}