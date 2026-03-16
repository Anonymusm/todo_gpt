import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './slices/tasksSlice' 

export const store = configureStore({
  reducer: {
    todos: todosSlice, 
  },
})
