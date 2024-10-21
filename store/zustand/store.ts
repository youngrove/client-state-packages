import { StoreState } from "@/types";
import { create } from "zustand";

let nextId = 0;
export const useTodoStore = create<StoreState>((set) => ({
  todos: [],
  addTodo: (title: string) =>
    set((prev) => ({
      todos: [...prev.todos, { id: ++nextId, title, done: false }],
    })),
  removeTodo: (id: number) =>
    set((prev) => ({ todos: prev.todos.filter((todo) => todo.id !== id) })),
  toggleTodo: (id: number) =>
    set((prev) => ({
      todos: prev.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    })),
}));
