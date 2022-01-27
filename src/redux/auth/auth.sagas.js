import {takeLatest, call, put, all} from 'redux-saga/effects'
import {signInSuccess, signInFailure, signUpSuccess, signUpFailure, logOutSuccess, logOutFailure} from "./auth.actions";
import AuthActionTypes from "./auth.types";
import {authEndpoint} from "../../API/API";


export function* signIn({payload: {email, password}}) {
    try {
        const user = yield authEndpoint.signIn(email,password)
        yield put(signInSuccess(user))
    } catch (error) {
        console.log(error)
        yield put(signInFailure(error))
    }
}

export function* signUp({firstName, lastName, email, password, passwordConfirm}) {
    try {
        const user = yield authEndpoint.signUp(firstName, lastName, email, password, passwordConfirm)
        yield put(signUpSuccess(user))
    } catch (e) {
        yield put(signUpFailure(e.message))
    }
}

export function* logout() {
    try {
        yield authEndpoint.logout()
        yield put(logOutSuccess())
    } catch (e) {
        yield put(logOutFailure(e.message))
    }
}

export function* onSignInStart() {
    yield takeLatest(AuthActionTypes.SIGN_IN_START, signIn)
}

export function* onSignUpStart() {
    yield takeLatest(AuthActionTypes.SIGN_UP_START, signUp)
}

export function* onLogOutStart() {
    yield takeLatest(AuthActionTypes.LOGOUT_START, logout)
}

export function* authSaga() {
    yield all([
        call(onSignInStart),
        call(onSignUpStart),
        call(onLogOutStart)])
}