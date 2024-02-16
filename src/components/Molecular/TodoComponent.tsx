import TodoButton from "@/components/Atomic/TodoButton";
import useReduxAction from "@/hooks/useReduxAction";
import { deleteTodo } from "@/store";

const TodoComponent = ({ title, id }: { title: string; id: string }) => {
  const { deleteTodoEvent } = useReduxAction();

  return (
    <article className="flex justify-between h-16 m-2 px-10 items-center bg-gray-50 gap-2">
      <strong className="text-ellipsis overflow-hidden">{title}</strong>
      <TodoButton
        className="rounded-full p-2 bg-gray-200 h-fit"
        onClick={() => deleteTodoEvent(id)}
      >
        delete
      </TodoButton>
    </article>
  );
};

export default TodoComponent;
