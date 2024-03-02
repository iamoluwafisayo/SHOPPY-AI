const BASE_URL = "http://127.0.0.1:8000";

export const AUTH_ENDPOINTS = {
  LOGIN: `${BASE_URL}/users/login/`,
  LOGOUT: `${BASE_URL}/users/logout/`,
  REGISTER: `${BASE_URL}/auth/users/`,
  ACTIVATION: `${BASE_URL}/auth/users/activation/`,
  AUTHENTICATED_USER: `${BASE_URL}/auth/users/me/`,
};