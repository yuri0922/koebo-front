import { useDeleteTodo } from "@/hooks/api/todo/useDeleteTodo";
import { useGetTodoList } from "@/hooks/api/todo/useGetTodoList";

const Todo = () => {
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
                console.log(todo.text + "がクリックされました");
                deleteTodo(todo.id);
              }}
            >
              {todo.text}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Todo;
