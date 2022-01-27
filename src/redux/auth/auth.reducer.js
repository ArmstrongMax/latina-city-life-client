import AuthActionTypes from "./auth.types"

const INITIAL_STATE = {
    currentUser: null,
    isFetching: false,
    errorMessage: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthActionTypes.SIGN_IN_START:
        case AuthActionTypes.SIGN_UP_START:
        case AuthActionTypes.LOGOUT_START:
            return {...state, isFetching: true}
        case AuthActionTypes.SIGN_IN_SUCCESS:
        case AuthActionTypes.SIGN_UP_SUCCESS:
            return {...state, isFetching: false, currentUser: action.payload}
        case AuthActionTypes.LOGOUT_SUCCESS:
            return {...state, isFetching: false, currentUser: null}
        case AuthActionTypes.SIGN_IN_FAILURE:
        case AuthActionTypes.SIGN_UP_FAILURE:
        case AuthActionTypes.LOGOUT_FAILURE:
            return {...state, isFetching: false, errorMessage: action.payload}
        default:
            return state
    }
}

export default authReducer