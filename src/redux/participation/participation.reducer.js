import ParticipationActionTypes from "./participation.types";

const INITIAL_STATE = {
    userParticipation: null,
    partyParticipation: null,
    errorMessage: null,
    isFetching: false
}

const participationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ParticipationActionTypes.FETCH_PARTICIPATION_START:
            return {
                ...state, isFetching: true
            }
        case ParticipationActionTypes.FETCH_PARTICIPATION_SUCCESS:
            if (action.payload.initiator === 'party') {
                return {
                    ...state, isFetching: false, partyParticipation: action.payload.participation
                }
            } else return {
                ...state, isFetching: false, userParticipation: action.payload.participation
            }

        case ParticipationActionTypes.FETCH_PARTICIPATION_FAILURE:

            return {
                ...state, isFetching: false, errorMessage: action.payload
            }
        default:
            return state
    }
}

export default participationReducer