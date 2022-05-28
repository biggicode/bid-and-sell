import * as constant from "./user.constant";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.LOGIN_START:
    case constant.LOGOUT_START:
    case constant.REGISTER_START:
    case constant.GOOGLE_LOGIN_START:
    case constant.FACEBOOK_LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case constant.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case constant.LOGOUT_SUCCES:
      return {
        ...state,
        currentUser: null,
        loading: false,
      };
    case constant.LOGIN_SUCCES:
    case constant.REGISTER_SUCCES:
    case constant.GOOGLE_LOGIN_SUCCES:
    case constant.FACEBOOK_LOGIN_SUCCES:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: null,
      };
    case constant.LOGIN_FAIL:
    case constant.LOGOUT_FAIL:
    case constant.REGISTER_FAIL:
    case constant.GOOGLE_LOGIN_FAIL:
    case constant.FACEBOOK_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
