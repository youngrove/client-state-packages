import { PrimitiveAtom } from "jotai";

export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

export type TodoNoId = {
  title: string;
  done: boolean;
};

export type TodoAtom = PrimitiveAtom<TodoNoId>;

export type StoreState = {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};
