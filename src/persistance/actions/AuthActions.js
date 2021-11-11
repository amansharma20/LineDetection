/* eslint-disable prettier/prettier */
import {AuthService} from '../services/AuthService';
import {AuthConstants} from '../constants/AuthConstants';
import {RequestConstant, ResponseConstant} from '../../utils/constants/CommanConstants';

export const AuthActions = {
  login,
  register
};

function login(url, data) {
  return async dispatch => {
    dispatch(RequestConstant(AuthConstants.LOGIN_REQUEST, data));
    const result = await AuthService.login(url, data);
    dispatch(
      ResponseConstant(
        AuthConstants.LOGIN_SUCCESS,
        AuthConstants.LOGIN_FAILURE,
        result,
      ),
    );
    return result;
  };
}

function register(url, data) {
  return async dispatch => {
    dispatch(RequestConstant(AuthConstants.REGISTER_REQUEST, data));
    const result = await AuthService.signUp(url, data);
    dispatch(
      ResponseConstant(
        AuthConstants.REGISTER_SUCCESS,
        AuthConstants.REGISTER_FAILURE,
        result,
      ),
    );
    return result;
  };
}

  