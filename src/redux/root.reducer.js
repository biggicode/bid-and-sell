import { combineReducers } from "redux"
import { userReducer } from "./user.reducer"

const createReducer = (asyncReducers) => {
  combineReducers({
    user: userReducer,
    ...asyncReducers,
  })
}

export default createReducer
