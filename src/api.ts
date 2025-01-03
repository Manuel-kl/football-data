import axios from "axios";

const apiUrl = process.env.VUE_APP_API_URL;
const apiKey = process.env.VUE_APP_API_KEY;
console.log("apiUrl", apiUrl);
console.log("apiKey", apiKey);

export const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-API-KEY": apiKey,
  },
});
