import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    data: []
  },
  reducers: {
    // Action
    addTodo: (state, action) => {
        console.log(state, action);
      if (action.payload) {
        state.data.push(action.payload);
        // return {  ...state, todos: [...state.todos, action.payload] }
      }
    },
    deleteTodo: (state, action) => {
      const filteredTodos = [...state.data].filter((todo) => todo !== action.payload);
      return {
        ...state, data: filteredTodos
      }
    },
  },
});


// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = TodoSlice.actions;
// Export Reducer
export default TodoSlice.reducer;