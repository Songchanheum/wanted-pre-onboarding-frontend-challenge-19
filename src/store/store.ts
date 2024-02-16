import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./action";

export default configureStore({
  reducer: { todos: todosSlice.reducer },
});
