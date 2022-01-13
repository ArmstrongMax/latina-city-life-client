import {combineReducers} from "redux"
import partiesReducer from "./parties/parties.reducer"

const rootReducer = combineReducers({
    parties: partiesReducer
})

export default rootReducer