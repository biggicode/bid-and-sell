import { combineReducers } from "redux"
import { userReducer } from "./user.reducer"

const rootReducer = combineReducers({
  user: userReducer,
})

//Root reducer
//Here we can have many reducers and we can combine them and pass it to the store

export default rootReducer
