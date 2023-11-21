import axios from "axios";

export const createApiClient = () => {
  const endpoint = process.env.ENDPOINT_URL;

  const instance = axios.create({
    baseURL: endpoint,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};
