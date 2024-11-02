import { removeTodo, state, toggleTodo } from "@/store/valtio/valtio";
import { memo } from "react";
import { useSnapshot } from "valtio";

const TodoItem = ({ id }: { id: number }) => {
  const todoState = state.todos.find((todo) => todo.id === id);

  if (!todoState) {
    throw new Error("invalid todo id");
  }

  const { title, done } = useSnapshot(todoState);

  return (
    <div>
      <input
        type="checkbox"
        checked={done}
        onChange={() => toggleTodo(id)}
      ></input>
      <span style={{ textDecoration: done ? "line-through" : "none" }}>
        {title}
      </span>
      <button onClick={() => removeTodo(id)}>Delete</button>
    </div>
  );
};

export default memo(TodoItem);
