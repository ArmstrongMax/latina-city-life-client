import {createSelector} from "reselect";

const selectParticipations = state => state.participation

export const selectParticipation = initiator =>
    createSelector([selectParticipations], participation => initiator === 'party'
        ? participation.partyParticipation || []
        : participation.userParticipation || [])

