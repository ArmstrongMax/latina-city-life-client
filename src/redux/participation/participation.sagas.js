import {takeLatest, call, put, all} from 'redux-saga/effects'
import {fetchParticipationSuccess, fetchParticipationFailure, fetchParticipationStart} from "./participation.actions";
import ParticipationActionTypes from "./participation.types";
import {participationEndpoint} from "../../API/API";

export function* fetchParticipation({payload: {initiator, id}}) {
    try {
        const participation = yield participationEndpoint.getParticipation(initiator, id)
        yield put(fetchParticipationSuccess(initiator, participation))
    } catch (error) {
        yield fetchParticipationFailure(error.message)
    }
}

export function* addParticipation({payload: {eventId, userId, initiator}}) {
    try {
        yield participationEndpoint.createParticipation(eventId, userId)
        initiator === 'party'
            ? yield put(fetchParticipationStart(initiator, eventId))
            : yield put(fetchParticipationStart(initiator, userId))
    } catch (error) {
        console.log(error)
    }
}

export function* removeParticipation({payload: {participationId, initiator, initiatorId}}) {
    try {
        yield participationEndpoint.deleteParticipation(participationId)
        yield put(fetchParticipationStart(initiator, initiatorId))
    } catch (error) {
        console.log(error)
    }
}

export function* onFetchParticipationStart() {
    yield takeLatest(ParticipationActionTypes.FETCH_PARTICIPATION_START, fetchParticipation)
}

export function* onAddParticipationStart() {
    yield takeLatest(ParticipationActionTypes.ADD_PARTICIPATION_START, addParticipation)

}

export function* onRemoveParticipationStart() {
    yield takeLatest(ParticipationActionTypes.REMOVE_PARTICIPATION_START, removeParticipation)
}

export function* participationSaga() {
    yield all([
        call(onFetchParticipationStart),
        call(onAddParticipationStart),
        call(onRemoveParticipationStart)
    ])

}