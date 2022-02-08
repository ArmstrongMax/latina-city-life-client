import {createSelector} from "reselect";

const selectAuth = state => state.auth

export const selectCurrentUser = createSelector([selectAuth], auth => auth.currentUser)

export const selectCurrentUserId = createSelector([selectCurrentUser], user => (user ? user._id : null))