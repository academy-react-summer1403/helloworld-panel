// src/http.ts
// import { ROUTES } from "@core/constants/routes";
import { store } from "../../../redux/store";
import { logOutUser } from "../../../redux/user";
import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

http.interceptors.request.use(
  (config) => {
    const token = store.getState().user.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logOutUser());
      // localStorage.removeItem("token");
    }
    if (error.response.status === 403) {
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default http;
