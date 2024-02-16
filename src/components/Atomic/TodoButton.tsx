import { ButtonHTMLAttributes, ReactNode } from "react";

const TodoButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{props.children}</button>;
};

export default TodoButton;
