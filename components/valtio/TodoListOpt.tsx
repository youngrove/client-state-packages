import { state } from "@/store/valtio/valtio";
import { useSnapshot } from "valtio";
import TodoItemOpt from "./TodoItemOpt";

const TodoListOpt = () => {
  const { todos } = useSnapshot(state);
  const todoIds = todos.map((todo) => todo.id); // done 상태 의존성 제거

  return (
    <div>
      {todoIds.map((todoId) => (
        <TodoItemOpt key={todoId} id={todoId}></TodoItemOpt>
      ))}
    </div>
  );
};

export default TodoListOpt;
