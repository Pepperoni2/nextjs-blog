export const ACTIONS = {
    NOTIFY: 'NOTIFY',
    AUTH: 'AUTH',
    ADD_EVENT: 'ADD_EVENT',
    EXIT_EVENT: 'EXIT_EVENT'
}

export const addToEnteredEvents = (event, enteredEvent) => {
    if (event.openslots === 0) return ({ type: 'NOTIFY', payload: { error: 'This event is full' } })

    const enter = enteredEvent.every(item => {
        return item._id !== event._id
    })

    if (!enter) return ({ type: 'NOTIFY', payload: { error: 'You have already entered this event.' } })
    return ({ type: 'ADD_EVENT', payload: [...enteredEvent, { ...event, closedSlots: 1 }] })
}

export const ExitEvent = (data, id, type) => {
    const newData = data.filter(enteredEvent => enteredEvent._id !== id)
    return ({ type, payload: newData })
}