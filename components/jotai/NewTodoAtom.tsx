import { todoAtomsAtom } from "@/store/jotai/store";
import { TodoNoId } from "@/types";
import { atom, useAtom } from "jotai";
import { useState } from "react";

const NewTodo = () => {
  const [, setTodoAtoms] = useAtom(todoAtomsAtom);
  const [text, setText] = useState("");

  const onClick = () => {
    setTodoAtoms((prev) => [
      ...prev,
      atom<TodoNoId>({ title: text, done: false }),
    ]);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={onClick} disabled={!text}>
        Add
      </button>
    </div>
  );
};

export default NewTodo;
