import { useTodoStore } from "@/store/zustand/store";
import { StoreState, Todo } from "@/types";
import { memo } from "react";

const selectRemoveTodo = (state: StoreState) => state.removeTodo;
const selectToggleTodo = (state: StoreState) => state.toggleTodo;

const TodoItem = ({ todo }: { todo: Todo }) => {
  const removeTodo = useTodoStore(selectRemoveTodo);
  const toggleTodo = useTodoStore(selectToggleTodo);
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      ></input>
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default memo(TodoItem);
