/* eslint-disable prettier/prettier */
import { SessionConstant } from '../constants/SessionConstant';

const initialState = {
  data: {
    isLoading : true,
    user: {}
  },
};

export function SessionReducer(state = initialState, action) {
  switch (action.type) {
    
    case SessionConstant.SESSION_REQUEST:
      return {
        status: SessionConstant.SESSION_REQUEST,
        data: { ...state.data },
        code: {},
      };

    case SessionConstant.SESSION_SUCCESS:
      return {
        status: SessionConstant.SESSION_SUCCESS,
        data: { ...state.data, isLoading:false, ...{ user: action.data } },
        code: {},
      };

    case SessionConstant.SESSION_FAILURE:
      return {
        status: SessionConstant.SESSION_FAILURE,
        data: { ...state.data, ...{ isLoading:false, user: {} } },
        code: {},
      };

    default:
      return state;
  }
}