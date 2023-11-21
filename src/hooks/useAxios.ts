import { createApiClient } from "@/libs/apiClient";

export const useAxios = () => {
  const axios = createApiClient();

  return { axios };
};
