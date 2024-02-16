import TodoButton from "@/components/Atomic/TodoButton";
import { deleteTodo } from "@/store";
import { useDispatch } from "react-redux";

const TodoComponent = ({ title, id }: { title: string; id: string }) => {
  const dispatch = useDispatch();

  return (
    <article className="flex justify-between h-16 m-2 px-10 items-center bg-gray-50 gap-2">
      <strong className="text-ellipsis overflow-hidden">{title}</strong>
      <TodoButton
        className="rounded-full p-2 bg-gray-200 h-fit"
        onClick={() => dispatch(deleteTodo(id))}
      >
        delete
      </TodoButton>
    </article>
  );
};

export default TodoComponent;
