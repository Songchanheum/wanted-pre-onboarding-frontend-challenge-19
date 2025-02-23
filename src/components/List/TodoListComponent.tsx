import TodoButton from "@/components/Atomic/TodoButton";
import TodoInput from "@/components/Atomic/TodoInput";
import TodoComponent from "@/components/Molecular/TodoComponent";
import { TodoListType } from "@/types";
import useReduxAction from "@/hooks/useReduxAction";

const TodoListComponent = () => {
  const { input, setInput, todos, addTodoEvent } = useReduxAction();

  return (
    <main className="border-2 rounded-2xl w-[600px] h-fit flex flex-col py-4">
      <h1 className="text-2xl font-bold">TODO LIST</h1>
      <section className="flex w-full px-2 mt-10 gap-2">
        <TodoInput
          className="w-[80%] border-none outline-none px-4 py-3 rounded-full bg-gray-100"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodoEvent();
            }
          }}
        />
        <TodoButton
          className="w-[20%] rounded-xl bg-slate-800 text-white"
          onClick={() => addTodoEvent()}
        >
          Add
        </TodoButton>
      </section>
      <section>
        {todos && todos.length > 0 ? (
          todos.map((todo: TodoListType) => {
            return <TodoComponent title={todo.title} id={todo.id} />;
          })
        ) : (
          <></>
        )}
      </section>
    </main>
  );
};

export default TodoListComponent;
