import { useAxios } from "@/hooks/useAxios";

export const useDeleteTodo = () => {
  const { axios } = useAxios();

  const deleteTodo = async (id: number) => {
    await axios.delete("/todo" + "/" + id);
  };

  return { deleteTodo };
};
