import EventsActionTypes from "./events.types"

const INITIAL_STATE = {
    selectedEvent: null,
    events: null,
    isFetching: false,
    errorMessage: null
}

const eventsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EventsActionTypes.FETCH_EVENTS_START:
        case EventsActionTypes.CREATE_EVENT_START:
            return {
                ...state,
                isFetching: true
            }
        case EventsActionTypes.FETCH_EVENTS_SUCCESS:
        case EventsActionTypes.CREATE_EVENT_SUCCESS:
            if (action.payload.length) {
            return {
                ...state,
                events: action.payload,
                isFetching: false
            }}
            return {
                ...state, selectedEvent: action.payload, isFetching: false
            }

        case EventsActionTypes.FETCH_EVENTS_FAILURE:
        case EventsActionTypes.CREATE_EVENT_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false
            }
        default:
            return state
    }
}

export default eventsReducer