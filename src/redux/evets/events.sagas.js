import {takeLatest, call, put, all} from 'redux-saga/effects'
import {fetchEventsSuccess, fetchEventsFailure, createEventSuccess} from './events.actions'
import EventsActionTypes from "./events.types"
import {partiesEndpoint} from '../../API/API'

export function* fetchEvents({payload: eventId}) {
    try {
        const events = yield partiesEndpoint.getEvents(eventId)
        yield put(fetchEventsSuccess(events))
    } catch (error) {
        yield put(fetchEventsFailure(error.message))
    }
}

export function* createEvent ({payload: eventData}) {
        const newEvent = yield partiesEndpoint.createEvent({...eventData})
    yield put(createEventSuccess(newEvent))
}

export function* onFetchEventsStart() {
    yield takeLatest(
        EventsActionTypes.FETCH_EVENTS_START,
        fetchEvents
    )
}
export function* onCreateEventStart() {
yield takeLatest(EventsActionTypes.CREATE_EVENT_START, createEvent)
}

export function* eventsSaga() {
    yield all([
        call(onFetchEventsStart),
        call(onCreateEventStart)
    ])
}