import { todosAtom } from "@/store/jotai/store";
import { useAtom } from "jotai";
import { useCallback } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const removeTodo = useCallback(
    (id: number) => setTodos((prev) => prev.filter((item) => item.id !== id)),
    [setTodos]
  );

  const toggleTodo = useCallback(
    (id: number) =>
      setTodos((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, done: !item.done } : item
        )
      ),
    [setTodos]
  );

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
