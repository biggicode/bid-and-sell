import * as constant from "./user.constant"
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

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({ displayName: displayName })

        dispatch(registerSucces(user))
      })
      .catch((error) => dispatch(registerFail(error.message)))
  }
}
