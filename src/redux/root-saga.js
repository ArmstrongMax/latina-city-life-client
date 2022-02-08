import {all, call} from 'redux-saga/effects'
import {eventsSaga} from './evets/events.sagas'
import {authSaga} from './auth/auth.sagas'
import {participationSaga} from "./participation/participation.sagas";
import {userSaga} from "./user/user.sagas";


export default function* rootSaga() {
    yield all(
        [
            call(eventsSaga),
            call(authSaga),
            call(participationSaga),
            call(userSaga)
        ]
    )
}