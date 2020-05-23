import axois from "axios";

export const apiClient = axois.create({
  baseURL: `${process.env.API_HOST}/api/v1`,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": process.env.API_KEY
  },
  withCredentials: true
});
