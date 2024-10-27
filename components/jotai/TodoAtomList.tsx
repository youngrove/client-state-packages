import { todoAtomsAtom } from "@/store/jotai/store";
import { useAtom } from "jotai";
import { useCallback } from "react";
import { TodoAtom } from "@/types";
import TodoAtomItem from "./TodoAtomItem";

const TodoAtomList = () => {
  const [todoAtoms, setTodoAtoms] = useAtom(todoAtomsAtom);

  const remove = useCallback(
    (todoAtom: TodoAtom) =>
      setTodoAtoms((prev) => prev.filter((item) => item !== todoAtom)),
    [setTodoAtoms]
  );

  return (
    <div>
      {todoAtoms.map((todoAtom) => (
        <TodoAtomItem
          key={`${todoAtom}`}
          todoAtom={todoAtom}
          remove={remove}
        ></TodoAtomItem>
      ))}
    </div>
  );
};

export default TodoAtomList;
