import EventsActionTypes from "./events.types"

export const fetchEventsStart = eventId => ({
    type: EventsActionTypes.FETCH_EVENTS_START,
    payload: eventId
})

export const fetchEventsSuccess = events => ({
    type: EventsActionTypes.FETCH_EVENTS_SUCCESS,
    payload: events
})

export const fetchEventsFailure = errorMessage => ({
    type: EventsActionTypes.FETCH_EVENTS_FAILURE,
    payload: errorMessage
})

export const createEventStart = newEventData => ({
    type: EventsActionTypes.CREATE_EVENT_START,
    payload: newEventData
})

export const createEventSuccess = createdEvent => ({
    type: EventsActionTypes.CREATE_EVENT_SUCCESS,
    payload: createdEvent
})

export const createEventFailure = errorMessage => ({
    type: EventsActionTypes.CREATE_EVENT_FAILURE,
    payload: errorMessage
})


