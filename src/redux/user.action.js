import * as constant from "./user.constant"
// import { auth } from "../config/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import { auth } from "../config/firebase"

const registerStart = () => ({
  type: constant.REGISTER_START,
})

const registerSucces = (user) => ({
  type: constant.REGISTER_SUCCES,
  payload: user,
})

const registerFail = (error) => ({
  type: constant.REGISTER_FAIL,
  payload: error,
})

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart())

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        return updateProfile(user, { displayName: displayName }).then(() =>
          dispatch(registerSucces(user))
        )
      })
      .then()
      .catch((error) => dispatch(registerFail(error.message)))
  }
}

//LOG IN

const loginStart = () => ({
  type: constant.LOGIN_START,
})

const loginSucces = (user) => ({
  type: constant.LOGIN_SUCCES,
  payload: user,
})

const loginFail = (error) => ({
  type: constant.LOGIN_FAIL,
  payload: error,
})

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart())

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSucces(user))
      })
      .catch((error) => dispatch(loginFail(error.message)))
  }
}
