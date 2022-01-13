import PartiesActionTypes from "./parties.types"

const INITIAL_STATE = {
    parties: null,
    isFetching: false,
    errorMessage: null
}

const partiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PartiesActionTypes.FETCH_PARTIES_START:
            return {
                ...state,
                isFetching: true
            }
        case PartiesActionTypes.FETCH_PARTIES_SUCCESS:
            return {
                ...state,
                parties: action.payload,
                isFetching: false
            }
        case PartiesActionTypes.FETCH_PARTIES_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false
            }
        default:
            return state
    }
}

export default partiesReducer