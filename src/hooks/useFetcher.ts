import { createApiClient } from "@/libs/apiClient";

export const useFetcher = () => {
  const fetcher = async (url: string) => {
    const axios = createApiClient();
    const { data } = await axios.get(url);
    return data;
  };
  return { fetcher };
};
