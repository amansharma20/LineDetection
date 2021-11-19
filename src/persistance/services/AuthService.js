/* eslint-disable prettier/prettier */
import { api } from "../common/CommonAPI";

export const AuthService = {
  login,
  signUp,
  resetPassword
};

async function login(url, data) {
  return await api.post(url, data);
}

async function signUp(url, data) {
  return await api.post(url, data);
}


async function resetPassword(url, data) {
  return await api.post(url, data);
}
