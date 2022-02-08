import {takeLatest, call, put, all} from 'redux-saga/effects'
import {userEndpoint} from "../../API/API"
import UserActionTypes from "./user.types"
import {signInSuccess} from "../auth/auth.actions"

export function* editUserData({payload: userData}) {
    try {
        const user = yield userEndpoint.editUserData({...userData})
        yield put(signInSuccess(user))
    } catch (error) {
        console.log(error)
    }
}

export function* onEditUserDataStart() {
    yield takeLatest(UserActionTypes.EDIT_USER_DATA_START, editUserData)
}

export function* userSaga() {
    yield all([call(onEditUserDataStart)])
}