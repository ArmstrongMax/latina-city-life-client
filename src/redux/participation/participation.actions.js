import ParticipationActionTypes from "./participation.types";

export const fetchParticipationStart = (initiator,id) => ({
    type: ParticipationActionTypes.FETCH_PARTICIPATION_START,
    payload: {initiator, id}
})

export const fetchParticipationSuccess = (initiator, participation) => ({
    type: ParticipationActionTypes.FETCH_PARTICIPATION_SUCCESS,
    payload: {initiator, participation}
})

export const fetchParticipationFailure = (errorMessage) => ({
    type: ParticipationActionTypes.FETCH_PARTICIPATION_FAILURE,
    payload: errorMessage
})

export const addParticipationStart = (eventId, userId, initiator) => ({
    type: ParticipationActionTypes.ADD_PARTICIPATION_START,
    payload: {eventId, userId, initiator}
})

export const removeParticipationStart = (participationId, initiator, initiatorId) => ({
    type: ParticipationActionTypes.REMOVE_PARTICIPATION_START,
    payload: {participationId, initiator, initiatorId}
})