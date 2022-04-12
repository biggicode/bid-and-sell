import * as constant from "./user.constant"
// import { auth } from "../config/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithPopup,
} from "firebase/auth"
import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
} from "../config/firebase"

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

//LOG OUT

const logoutStart = () => ({
  type: constant.LOGOUT_START,
})

const logoutSucces = () => ({
  type: constant.LOGOUT_SUCCES,
})

const logoutFail = (error) => ({
  type: constant.LOGOUT_FAIL,
  payload: error,
})

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart())

    signOut(auth)
      .then((resp) => dispatch(logoutSucces()))
      .catch((error) => dispatch(logoutFail(error.message)))
  }
}

//GOOGLE LOG IN

const googleLoginStart = () => ({
  type: constant.GOOGLE_LOGIN_START,
})

const googleLoginSucces = (user) => ({
  type: constant.GOOGLE_LOGIN_SUCCES,
  payload: user,
})

const googleLoginFail = (error) => ({
  type: constant.GOOGLE_LOGIN_FAIL,
  payload: error,
})

export const googleLogInInitiate = () => {
  return function (dispatch) {
    dispatch(googleLoginStart())

    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        console.log(user)
        dispatch(googleLoginSucces(user))
      })
      .catch((error) => dispatch(googleLoginFail(error.message)))
  }
}

//Facebook LOG IN

const facebookLoginStart = () => ({
  type: constant.FACEBOOK_LOGIN_START,
})

const facebookLoginSucces = (user) => ({
  type: constant.FACEBOOK_LOGIN_SUCCES,
  payload: user,
})

const facebookLoginFail = (error) => ({
  type: constant.FACEBOOK_LOGIN_FAIL,
  payload: error,
})

export const facebookLogInInitiate = () => {
  return function (dispatch) {
    dispatch(facebookLoginStart())

    signInWithPopup(auth, facebookAuthProvider.addScope("user_birthday, email"))
      .then(({ user }) => {
        dispatch(facebookLoginSucces(user))
      })
      .catch((error) => dispatch(facebookLoginFail(error.message)))
  }
}

//Action to persist user after auth
export const setUser = (user) => ({ type: constant.SET_USER, payload: user })
