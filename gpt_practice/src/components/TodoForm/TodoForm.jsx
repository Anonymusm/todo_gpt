import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/tasksSlice";
import s from "./TodoForm.module.css";
import DropDown from "../DropDown/DropDown";

const priority = [
  { id: 1, level: "Low" },
  { id: 2, level: "Medium" },
  { id: 3, level: "High" },
];

export function TodoForm() {
  const [todoValue, setTodoValue] = useState(() =>
    JSON.parse(localStorage.getItem("value") || '""'),
  );
  const [desc, setDesc] = useState(() =>
    JSON.parse(localStorage.getItem("desc") || '""'),
  );
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState("Medium");
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = priority.filter((i) => i.level !== sortType);
  // const id = useSelector((state) => state.todos.currentId);

  const disabled = todoValue.trim().length === 0 || desc.trim().length === 0;

  const handleToggle = () => setIsOpen((prev) => !prev);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(add({ todoValue, desc, sortType }));

    setTodoValue("");
    setDesc("");
    setSortType("Medium");

    localStorage.removeItem("value");
    localStorage.removeItem("desc");
  }

  return (
    <section className={s.section}>
      <form onSubmit={handleSubmit}>
        <label className={s.label}>
          Title:
          <input
            type="text"
            maxLength={30}
            className={s.input}
            value={todoValue}
            onChange={(e) => {
              setTodoValue(e.target.value);
              localStorage.setItem("value", JSON.stringify(e.target.value));
            }}
            placeholder="e.g. Buy milk"
          />
        </label>
        <label className={s.label}>
          Description:
          <input
            className={s.input}
            type="text"
            value={desc}
            maxLength={70}
            placeholder="e.g. Go to the supermarkt"
            onChange={(e) => {
              setDesc(e.target.value);
              localStorage.setItem("desc", JSON.stringify(e.target.value));
            }}
          />
        </label>
        <DropDown
          dropdown={dropdown}
          isOpen={isOpen}
          activeSort={sortType}
          handleToggle={handleToggle}
          close={() => setIsOpen(false)}
          set={setSortType}
        />
        <button className={s.button} disabled={disabled}>
          Add todo
        </button>
      </form>
    </section>
  );
}
