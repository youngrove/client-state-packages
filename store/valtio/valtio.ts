import { Todo } from "@/types";
import { proxy } from "valtio";

let nextId = 0;

export const state = proxy<{ todos: Todo[] }>({
  todos: [],
});

export const createTodo = (title: string) => {
  state.todos.push({
    id: nextId++,
    title,
    done: false,
  });
};

export const removeTodo = (id: number) => {
  const idx = state.todos.findIndex((item) => item.id === id);
  state.todos.splice(idx, 1);
};

export const toggleTodo = (id: number) => {
  const idx = state.todos.findIndex((item) => item.id === id);
  state.todos[idx].done = !state.todos[idx].done;
};
