import {all, call} from 'redux-saga/effects'
import {partiesSaga} from "./parties/parties.sagas"


export default function* rootSaga() {
    yield all([call(partiesSaga)])
}