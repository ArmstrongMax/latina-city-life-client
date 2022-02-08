import {combineReducers} from "redux"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import eventsReducer from "./evets/events.reducer"
import authReducer from "./auth/auth.reducer";
import participationReducer from "./participation/participation.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
};

const rootReducer = combineReducers({
    events: eventsReducer,
    auth: authReducer,
    participation: participationReducer,
    user: userReducer
})

export default persistReducer(persistConfig, rootReducer)