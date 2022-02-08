import {createSelector} from "reselect";

const selectEvents = state => state.events

export const selectEventsForHomePage = createSelector([selectEvents], events => events.events || [])
export const selectSelectedEvent = createSelector([selectEvents], events => events.selectedEvent || [])