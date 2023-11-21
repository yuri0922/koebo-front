import useSWR from "swr";

type Todo = {
  id: number;
  text: string;
};

type TodoResponse = Todo[];

export const useGetTodoList = () => {
  const { data, error, mutate } = useSWR<TodoResponse>("/todos");
  return { data, error, mutate };
};
