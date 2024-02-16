import { addTodo, deleteTodo, store } from "@/store";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useReduxAction = () => {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState<string>("");

  const setInput = useCallback((text: string) => setInputText(text), []);
  const todos = useSelector(
    (state: ReturnType<typeof store.getState>) => state.todos.todos
  );

  const addTodoEvent = () => {
    dispatch(addTodo(inputText));
    setInputText("");
  };

  const deleteTodoEvent = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return { input: inputText, setInput, todos, addTodoEvent, deleteTodoEvent };
};

export default useReduxAction;
