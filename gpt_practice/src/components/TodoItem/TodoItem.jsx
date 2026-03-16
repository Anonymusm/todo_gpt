import { memo, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, edit } from "../../redux/slices/tasksSlice";
import { AiFillEdit } from "react-icons/ai";
import s from "./TodoItem.module.css";
import { Link } from "react-router-dom";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [localTodo, setLocalTodo] = useState(todo);
  const isEditing = useSelector((state) => state.todos.editingId === todo.id);

  return (
    <>
      {isEditing ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Title:
            <input
              type="text"
              value={localTodo.title}
              maxLength={30}
              onChange={(e) =>
                setLocalTodo({ ...localTodo, title: e.target.value })
              }
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={localTodo.description}
              maxLength={70}
              onChange={(e) =>
                setLocalTodo({ ...localTodo, description: e.target.value })
              }
            />
          </label>
          <button type="button" onClick={() => dispatch(edit(localTodo))}>
            Save
          </button>
        </form>
      ) : (
    <li className={s.item}>
  <Link to={`/todo/${todo.id}`}>
    <div className={s.info}>
      <h3 className={s.title}>{todo.title}</h3>
      <p className={s.desc}>{todo.description}</p>
      <p className={s.priority}>{todo.priority}</p>
    </div>
  </Link>
  <div className={s.btnWrapper}>
    <button
      className={s.deleteBtn}
      onClick={(e) => {
        e.preventDefault();
        dispatch(deleteTodo(todo.id));
      }}
    >
      <MdDelete style={{ color: "#000" }} />
    </button>
    <button
      className={s.editBtn}
      onClick={(e) => {
        e.preventDefault();
        dispatch(edit(todo));
      }}
    >
      <AiFillEdit style={{ color: "#000" }} />
    </button>
  </div>
</li>
      )}
    </>
  );
}

export default memo(TodoItem)