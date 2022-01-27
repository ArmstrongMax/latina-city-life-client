import {takeLatest, call, put, all} from 'redux-saga/effects'
import {fetchEventsSuccess, fetchEventsFailure} from './events.actions'
import EventsActionTypes from "./events.types"
import {partiesEndpoint} from '../../API/API'

export function* fetchEvents({payload: eventId}) {
    try {
        console.log('start')
        const events = yield partiesEndpoint.getEvents(eventId)
        yield put(fetchEventsSuccess(events))
    } catch (error) {
        yield put(fetchEventsFailure(error.message))
    }
}

export function* onFetchEventsStart() {
    yield takeLatest(
        EventsActionTypes.FETCH_EVENTS_START,
        fetchEvents
    )
}

export function* eventsSaga() {
    yield all([call(onFetchEventsStart)])
}