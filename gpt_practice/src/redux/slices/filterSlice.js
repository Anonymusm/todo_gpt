// filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  currentFilter: "All",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // Nur die Kriterien aktualisieren
    get: (state, action) => {
      state.currentFilter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  },
});

export const { get, setSearch } = filterSlice.actions;
export default filterSlice.reducer;
