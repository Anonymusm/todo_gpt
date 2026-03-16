import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
  editingId: null,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    add: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload.todoValue,
        description: action.payload.desc,
        priority: action.payload.sortType,
        createdAt: new Date().toLocaleString("de-DE"),
      };

      state.todos.push(newTodo);

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    edit: (state, action) => {
      if (state.editingId === action.payload.id) {
        state.todos = state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...action.payload } : todo,
        );

        state.editingId = null;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      } else {
        state.editingId = action.payload.id;
      }
    },

    close: (state) => {
      state.editingId = null;
    },
  },
});

export const { deleteTodo, add, edit, close, reorder, changeStatus } =
  todosSlice.actions;
export default todosSlice.reducer;
