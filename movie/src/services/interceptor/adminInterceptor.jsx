import axios from "axios";
import { ACCESS_TOKEN, DOMAIN, TOKEN_CYBERSOFT } from "@/utils/constant";

export const adminHttp = axios.create({
  baseURL: DOMAIN,
  timeout: 5000,
});

// request
adminHttp.interceptors.request.use((request) => {
  if (typeof window !== "undefined") {
    request.headers = {
      ...request.headers,
      Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      TokenCybersoft: TOKEN_CYBERSOFT,
    };
  }
  return request;
});

// response
adminHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);
