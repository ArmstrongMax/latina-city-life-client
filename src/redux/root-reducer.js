import {combineReducers} from "redux"
import eventsReducer from "./evets/events.reducer"
import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
    events: eventsReducer,
    auth: authReducer
})

export default rootReducer