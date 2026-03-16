import { useMemo, useState } from "react";
import s from "./Filter.module.css";
import { TodoItem } from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

const list = ["All", "Low", "Medium", "High"];

export function Filter() {
  const todos = useSelector((state) => state.todos.todos);
  const [currentFilter, setCurrentFilter] = useState("All");

  const [search, setSearch] = useState("");

  const filteredList = useMemo(() => {
    return todos.filter((todo) => {
      const filter = currentFilter === "All" || todo.priority === currentFilter;
      const searched = todo.title.toLowerCase().includes(search.toLowerCase());

      return filter && searched;
    });
  }, [currentFilter, search, todos]);

  return (
    <>
      <label>
        Search Todo:
        <input
          placeholder="e.g. Read my book"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>

      <ul className={s.btnList}>
        {list.map((item) => (
          <li key={item}>
            <button
              type="button"
              onClick={() => setCurrentFilter(item)}
              className={item === currentFilter ? s.active : s.button}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {filteredList.length === 0 ? (
          <p>No todos found!</p>
        ) : (
          filteredList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </ul>
    </>
  );
}
