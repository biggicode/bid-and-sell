import * as constant from "./user.constant"
// import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
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
