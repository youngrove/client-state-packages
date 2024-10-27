import { Todo, TodoAtom } from "@/types";
import { atom } from "jotai";

export const todosAtom = atom<Todo[]>([]);
export const todoAtomsAtom = atom<TodoAtom[]>([]);
