import axios from "axios";

export const useApiClient = () => {
  const config = useRuntimeConfig();
  console.log("apiUrl", config.public.apiUrl);
  console.log("apiKey", config.public.apiKey);

  const apiClient = axios.create({
    baseURL: config.public.apiUrl,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Auth-Token": config.public.apiKey,
    },
  });

  return { apiClient };
};
