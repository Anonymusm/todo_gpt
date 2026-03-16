import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import todosReducer from './slices/tasksSlice'; 

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    todos: todosReducer,
  },
});
