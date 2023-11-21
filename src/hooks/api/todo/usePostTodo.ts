import { useAxios } from "@/hooks/useAxios";

export const usePostTodo = () => {
  const { axios } = useAxios();

  const postTodo = async (id: string) => {
    await axios.post("/todos", { text: id });
  };

  return { postTodo };
};
