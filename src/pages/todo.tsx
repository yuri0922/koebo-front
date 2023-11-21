import { useGetTodoList } from "@/hooks/api/useGetTodoList";

const Todo = () => {
  const { data, error } = useGetTodoList();
  return (
    <div>
      <h1>Todo</h1>
      {data &&
        data.map((todo) => (
          <div key={todo.id}>
            <p>{todo.text}</p>
          </div>
        ))}
    </div>
  );
};

export default Todo;
