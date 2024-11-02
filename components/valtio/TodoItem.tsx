import { removeTodo, toggleTodo } from "@/store/valtio/valtio";
import { memo } from "react";

const TodoItem = ({
  id,
  title,
  done,
}: {
  id: number;
  title: string;
  done: boolean;
}) => {
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
