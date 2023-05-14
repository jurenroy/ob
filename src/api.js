// api.js

import axios from "axios";

const api = axios.create({
  // baseURL: "http://jurenroy.pythonanywhere.com/",
  baseURL: "http://localhost:8000/"
});

export function createUserProfile(data, headers) {
  return api.post("api/v1/accounts/users/", data, headers);
}

export function UserLogin(data, headers) {
  return api.post("api/v1/accounts/token/login", data, headers);
}
