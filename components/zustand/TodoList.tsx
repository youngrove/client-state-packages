import { useTodoStore } from "@/store/zustand/store";
import { StoreState } from "@/types";
import TodoItem from "./TodoItem";

const selectTodos = (state: StoreState) => state.todos;

const TodoList = () => {
  const todos = useTodoStore(selectTodos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
