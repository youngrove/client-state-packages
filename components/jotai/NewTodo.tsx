import { todosAtom } from "@/store/jotai/store";
import { useAtom } from "jotai";
import { useState } from "react";

let nextId = 0;

const NewTodo = () => {
  const [, setTodos] = useAtom(todosAtom);
  const [text, setText] = useState("");

  const onClick = () => {
    setTodos((prev) => [...prev, { id: nextId++, title: text, done: false }]);
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
