import EventsActionTypes from "./events.types"

export const fetchEventsStart = (eventId) => ({
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


