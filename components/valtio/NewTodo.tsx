import { createTodo } from "@/store/valtio/valtio";
import { useState } from "react";

const NewTodo = () => {
  const [text, setText] = useState("");
  const onClick = () => {
    createTodo(text);
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
