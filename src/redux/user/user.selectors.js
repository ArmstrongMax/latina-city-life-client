import {createSelector} from "reselect";

const selectUsers = state => state.user

export const selectFavorites = createSelector([selectUsers], user => user.favorites)