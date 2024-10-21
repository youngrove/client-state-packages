import { useTodoStore } from "@/store/zustand/store";
import { StoreState } from "@/types";
import { useState } from "react";

const selectAddTodo = (state: StoreState) => state.addTodo;

const NewTodo = () => {
  const addTodo = useTodoStore(selectAddTodo);
  const [text, setText] = useState("");
  const onClick = () => {
    addTodo(text);
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
