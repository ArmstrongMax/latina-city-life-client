import {all, call} from 'redux-saga/effects'
import {eventsSaga} from './evets/events.sagas'
import {authSaga} from './auth/auth.sagas'


export default function* rootSaga() {
    yield all(
        [
            call(eventsSaga),
            call(authSaga)
        ]
    )
}