import AuthActionTypes from "./auth.types"

export const signInStart = (userCredentials) => ({
    type: AuthActionTypes.SIGN_IN_START,
    payload:userCredentials
})
export const signInSuccess = user => ({
    type: AuthActionTypes.SIGN_IN_SUCCESS,
    payload: user
})
export const signInFailure = errorMessage => ({
    type: AuthActionTypes.SIGN_IN_FAILURE,
    payload: errorMessage
})
export const signUpStart = () => ({
    type: AuthActionTypes.SIGN_UP_START,
})
export const signUpSuccess = user => ({
    type: AuthActionTypes.SIGN_UP_SUCCESS,
    payload: user
})
export const signUpFailure = errorMessage => ({
    type: AuthActionTypes.SIGN_UP_FAILURE,
    payload: errorMessage
})
export const logOutStart = () => ({
    type: AuthActionTypes.LOGOUT_START
})
export const logOutSuccess = () => ({
    type: AuthActionTypes.LOGOUT_SUCCESS
})
export const logOutFailure = errorMessage => ({
    type: AuthActionTypes.LOGOUT_FAILURE,
    payload: errorMessage
})