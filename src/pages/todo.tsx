import { useDeleteTodo } from "@/hooks/api/todo/useDeleteTodo";
import { useGetTodoList } from "@/hooks/api/todo/useGetTodoList";
import { usePostTodo } from "@/hooks/api/todo/usePostTodo";
import { useState } from "react";

const Todo = () => {
  const { data, mutate } = useGetTodoList();
  const { deleteTodo } = useDeleteTodo();
  const [text, setText] = useState("");
  const { postTodo } = usePostTodo();
  return (
    <div>
      <h1>Todo</h1>
      <div className="my-4 ml-2">
        <input
          className="border-2 border-gray-500 py-2"
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={async () => {
            await postTodo(text);
            mutate();
          }}
        >
          作成！
        </button>
      </div>
      {data &&
        data.map((todo) => (
          <div key={todo.id}>
            <p
              className="cursor-pointer"
              onClick={async () => {
                console.log(todo.text + "がクリックされました");
                await deleteTodo(todo.id);
                mutate();
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
