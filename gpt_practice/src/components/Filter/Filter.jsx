import s from "./Filter.module.css";
import TodoItem from "../TodoItem/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { get, setSearch } from "../../redux/slices/filterSlice";

const list = ["All", "Low", "Medium", "High"];

export function Filter() {
  const todos = useSelector((state) => state.todos.todos);
  const currentFilter = useSelector((state) => state.filter.currentFilter);
  const search = useSelector((state) => state.filter.search);
  const dispatch = useDispatch();

  // Hier passiert die Magie: Die Liste wird "live" berechnet
  const filteredTodos = todos.filter((todo) => {
    const matchesFilter = currentFilter === "All" || todo.priority === currentFilter;
    const matchesSearch = todo.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <label>
        Search Todo:
        <input
          placeholder="e.g. Read my book"
          type="text"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </label>

      <ul className={s.btnList}>
        {list.map((item) => (
          <li key={item}>
            <button
              onClick={() => dispatch(get(item))}
              className={item === currentFilter ? s.active : s.button}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <ul>
        {filteredTodos.length === 0 ? (
          <p>No todos found!</p>
        ) : (
          filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </ul>
    </>
  );
}
