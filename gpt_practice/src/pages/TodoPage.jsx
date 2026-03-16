import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function TodoPage() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos.todos);

  const foundedTodo = todos.find((todo) => todo.id.toString() === id);

  if (!foundedTodo) {
    return <p>Todo not found.</p>;
  }

  return (
    <article>
      <h3>Title: {foundedTodo.title}</h3>
      <p>Description: {foundedTodo.description}</p>
      <p>Priority: {foundedTodo.priority}</p>
      <span>Created at: {foundedTodo.createdAt}</span>
    </article>
  );
}
