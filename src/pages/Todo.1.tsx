import { useDeleteTodo } from "@/hooks/api/todo/useDeleteTodo";
import { useGetTodoList } from "@/hooks/api/todo/useGetTodoList";

export const Todo = () => {
  const { data } = useGetTodoList();
  const { deleteTodo } = useDeleteTodo();
  return (
    <div>
      <h1>Todo</h1>
      {data &&
        data.map((todo) => (
          <div key={todo.id}>
            <p
              className="cursor-pointer"
              onClick={() => {
                deleteTodo;
                alert(todo.text);
              }}
            >
              {todo.text}
            </p>
          </div>
        ))}
    </div>
  );
};
