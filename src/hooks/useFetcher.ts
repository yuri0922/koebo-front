import { useAxios } from "./useAxios";

export const useFetcher = () => {
  const { axios } = useAxios();
  const fetcher = async (url: string) => {
    const { data } = await axios.get(url);
    return data;
  };
  return { fetcher };
};
