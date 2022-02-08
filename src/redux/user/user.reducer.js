import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    favorites: [],

}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.ADD_TO_FAVORITES:
            return {
                ...state, favorites: [...state.favorites, action.payload]
            }
        case UserActionTypes.REMOVE_FROM_FAVORITES:
            return {
                ...state, favorites: state.favorites.filter(item => item !== action.payload)
            }
        default: return state

    }
}

export default userReducer