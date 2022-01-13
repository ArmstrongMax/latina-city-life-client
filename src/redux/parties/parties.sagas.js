import {takeLatest, call, put, all} from 'redux-saga/effects'
import {fetchPartiesSuccess, fetchPartiesFailure} from './parties.actions'
import PartiesActionTypes from "./parties.types"
import {partiesApi} from '../../API/API'

export function* fetchParties() {
    try {
        const partiesMap = yield partiesApi.getAllParties
        yield put(fetchPartiesSuccess(partiesMap))
    } catch (error) {
        yield put(fetchPartiesFailure(error.message))
    }
}

export function* fetchPartiesStart() {
    yield takeLatest(
        PartiesActionTypes.FETCH_PARTIES_START,
        fetchParties
    )
}

export function* partiesSaga() {
    yield all([call(fetchPartiesStart)])
}