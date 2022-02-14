import {createSelector} from "reselect";

const selectAuth = state => state.auth

export const selectCurrentUser = createSelector([selectAuth], auth => auth.currentUser)
export const selectAuthIsFetching = createSelector([selectAuth], auth => auth.isFetching)
export const selectAuthErrorMessage = createSelector([selectAuth], auth => auth.errorMessage)
export const selectAuthIsSomeoneAuthorized = createSelector([selectAuth], auth => auth.isSomeoneAuthorized)