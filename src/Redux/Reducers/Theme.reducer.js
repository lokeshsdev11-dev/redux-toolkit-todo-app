import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    type: "light" // light, dark, system
  },
  reducers: {
    // Action
    toggleTheme: (state, action) => {
      return { ...state, type: action.payload }
    },
  },
});


// Action creators are generated for each case reducer function
export const { toggleTheme } = ThemeSlice.actions;
// Export Reducer
export default ThemeSlice.reducer;