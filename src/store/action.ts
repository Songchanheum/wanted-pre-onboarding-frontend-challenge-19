import { InitialStateType } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState: InitialStateType = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        {
          id: nanoid(16),
          title: action.payload,
        },
        ...state.todos,
      ];
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const idxTask = state.todos.findIndex(
        (task) => task.id === action.payload
      );
      state.todos.splice(idxTask, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
