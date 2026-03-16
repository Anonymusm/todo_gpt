import { TodoList } from "../components/TodoList/TodoList";
import { Filter } from "../components/Filter/Filter";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { useSelector } from "react-redux";

export function BoardPage() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <main>
      <div className="container">
      <h1>Todo</h1>
      <TodoForm />
      {todos.length > 0 ? (
        <>
          <TodoList />
        </>
      ) : (
        <p>Add todo!</p>
      )}</div>
    </main>
  );
}
