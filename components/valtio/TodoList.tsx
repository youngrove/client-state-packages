import TodoItem from "./TodoItem";
import { state } from "@/store/valtio/valtio";
import { useSnapshot } from "valtio";

const TodoList = () => {
  const { todos } = useSnapshot(state);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          done={todo.done}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
