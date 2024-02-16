import { InputHTMLAttributes } from "react";

const TodoInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input type="text" placeholder="Add Todo..." {...props} />;
};

export default TodoInput;
