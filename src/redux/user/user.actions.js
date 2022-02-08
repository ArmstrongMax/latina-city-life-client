import UserActionTypes from "./user.types";

export const addToFavorites = event => ({
    type: UserActionTypes.ADD_TO_FAVORITES,
    payload: event
})

export const removeFromFavorites = event => ({
    type: UserActionTypes.REMOVE_FROM_FAVORITES,
    payload: event
})

export const editUserDataStart = userData => ({
    type: UserActionTypes.EDIT_USER_DATA_START,
    payload: userData
})

