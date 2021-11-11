/* eslint-disable prettier/prettier */
import { AuthConstants } from '../constants/AuthConstants';

const initialState = {
  status: '',
  data: {
    loggedIn: false,
    user: {},
    isSignedup: false
  },
  error: {},
};

export function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AuthConstants.LOGIN_REQUEST:
      return {
        status: AuthConstants.LOGIN_REQUEST,
        data: { ...state.data, loggedIn: false, isSignedup: false, ...{ user: action.data } },
        error: {},
      };
    case AuthConstants.LOGIN_SUCCESS:
      return {
        status: AuthConstants.LOGIN_SUCCESS,
        data: { ...state.data, loggedIn: true, isSignedup: false, ...{ user: action.data } },
        error: {},
      };
    case AuthConstants.LOGIN_FAILURE:
      return {
        status: AuthConstants.LOGIN_FAILURE,
        data: { loggedIn: false, isSignedup: false, user: {} },
        error: action.data,
      };

    case AuthConstants.REGISTER_REQUEST:
      return {
        status: AuthConstants.REGISTER_REQUEST,
        data: { ...state.data, ...{ user: action.data } },
        error: {},
      };
    case AuthConstants.REGISTER_SUCCESS:
      return {
        status: AuthConstants.REGISTER_SUCCESS,
        data: { ...state.data, loggedIn: true, isSignedup: true, ...{ user: action.data } },
        error: {},
      };
    case AuthConstants.REGISTER_FAILURE:
      return {
        status: AuthConstants.REGISTER_FAILURE,
        data: { loggedIn: false, user: {}, isSignedup: false },
        error: action.data,
      };

    default:
      return state;
  }
}
