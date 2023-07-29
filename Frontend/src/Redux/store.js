
import { legacy_createStore } from "redux"
import { combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { reducer as authreducer } from "./AdminReducer/reducer"
import { reducer as mediareducer } from "./PostReducer/reducer"


const rootReducer=combineReducers({
authreducer ,
mediareducer

})




export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))