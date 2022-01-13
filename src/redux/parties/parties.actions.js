import PartiesActionTypes from "./parties.types"

export const fetchPartiesStart = () => ({
    type: PartiesActionTypes.FETCH_PARTIES_START
})

export const fetchPartiesSuccess = partiesMap => ({
    type: PartiesActionTypes.FETCH_PARTIES_SUCCESS,
    payload: partiesMap
})

export const fetchPartiesFailure = errorMessage => ({
    type: PartiesActionTypes.FETCH_PARTIES_FAILURE,
    payload: errorMessage
})

