import * as constant from "./user.constant"

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.REGISTER_START:
      return {
        ...state,
        loading: true,
      }

    case constant.REGISTER_SUCCES:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      }

    case constant.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
